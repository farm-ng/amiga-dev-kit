---
id: dashboard-settings
title: Dashboard Settings
---

# Amiga Dashboard Settings Example

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. [**farm-ng Canbus Service Overview**](/docs/concepts/canbus_service):
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Amiga Dashboard Settings**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/dashboard_settings/main.py)
example is a basic way of showing how to query and set parameters
on the Amiga dashboard settings page from your Amiga brain.

You can either run this example directly on a brain by `ssh`'ing in, or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

The requirements to run this example are to have a
[**farm-ng brain**](/docs/brain/) running the `canbus service`, with a dashboard attached to your Amiga.
The `RequestReply` calls will fail if there is no dashboard to communicate with on the CAN bus.

At the current dashboard firmware release `v0.4.0`, only the `READ` operation is supported.
The `WRITE` and `STORE` API is implemented and staged for release in dashboard firmware release `v0.5.0`.

## `ConfigRequestReply` details

The `ConfigRequestReply` proto, and associated fields,
can be found at **[amiga_v6.proto](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/amiga_v6.proto)**.

```proto
// ConfigRequestReply encapsulates an operation ID, value ID, unit of measurement,
// value, and success status for a configuration request or reply operation.
//
// NOTE: The success field is only used for replies.
// NOTE: The value field may be outside of the valid range for the value ID.
message ConfigRequestReply {
  uint32 node_id = 1;           // Node ID of the receiver (request) == sender (reply)
  double stamp = 2;             // Received time, in host monotonic clock (seconds)

  ConfigOperationIds op_id = 3; // The operation ID of the request/reply. REQUIRED for all operations.
  ConfigValueIds val_id = 4;    // The value ID of the request/reply. REQUIRED for READ & WRITE operations.
  ConfigValueUnits unit = 5;    // The unit of measurement for the value. REQUIRED for READ & WRITE operations.
  bool success = 6;             // For replies, true if the request was successful, false otherwise.

  oneof value {                 // Set one of the following fields based on the value ID.
                                // Can be left unset for READ & STORE operations.
    int32 int_value = 7;        // Used for integer values, e.g. PTO_CUR_DEV
    double double_value = 8;    // Used for floating-point values, e.g. VEL_MAX
    bool bool_value = 9;        // Used for boolean values, e.g. M10_ON
  }
}
```

## 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## 2. Install the example's dependencies

### Setup

```bash
cd farm-ng-amiga/
```

:::tip Recommended

Create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

:::

### Install

```bash
cd py/examples/dashboard_settings
pip install -r requirements.txt
```

## 3. Execute the Python script

:::info
To run this script from your PC, you need to update the `service_config.json`
by modifying the `host` field with your Amiga brain name.

Please check out [Amiga Development 101](/docs/concepts/system_overview/README.md#where-to-run-the-examples)
for more details.
:::

```bash
python main.py --service-config service_config.json
```

## 4. Modify the script

Change the **`val_id`** (which parameter you are interacting with)
and **`op_id`** (which operation is being performed on that parameter)
to query or modify other dashboard settings.

:::tip
Be sure to change the **`unit`** to a compatible type!
You can't have a max velocity in `VOLTS`!
:::

You can find the full set of available **`ConfigOperationIds`**, **`ConfigValueIds`**, and **`ConfigValueUnits`**
directly in the protobufs, at **[amiga_v6.proto](https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/amiga_v6.proto)**.

## 5. Customize run

```bash
$ python main.py --help
usage: Query / set dashboard config parameters. [-h] --service-config SERVICE_CONFIG [--store]

optional arguments:
  -h, --help            show this help message and exit
  --service-config SERVICE_CONFIG
                        The canbus service config.
  --store               Store the persistent parameters on the dashboard.
```

## 6. Expected output

You should see a printed stream of your requests and the corresponding replies.
For example, here we:

1. `READ` the dashboard's `VEL_MAX` parameter in `MPS` (meters per second)
2. `WRITE` the dashboard's `VEL_MAX` parameter in `MPS` to `0.254` (half the original)
   1. Note that `success == true` and the value matches what we set!
3. We again `READ` the dashboard's `VEL_MAX` parameter in `MPS` and confirm it is set to the new value

```bash
###################
Request:
node_id: 14
op_id: READ
val_id: VEL_MAX
unit: MPS


Response:
node_id: 14
stamp: 77157.560405717
op_id: READ
val_id: VEL_MAX
unit: MPS
success: true
double_value: 0.5334010124206543


###################
Request:
node_id: 14
op_id: WRITE
val_id: VEL_MAX
unit: MPS
double_value: 0.254


Response:
node_id: 14
stamp: 77157.939269035
op_id: WRITE
val_id: VEL_MAX
unit: MPS
success: true
double_value: 0.25399994850158691


###################
Request:
node_id: 14
op_id: READ
val_id: VEL_MAX
unit: MPS


Response:
node_id: 14
stamp: 77159.068547232
op_id: READ
val_id: VEL_MAX
unit: MPS
success: true
double_value: 0.25399994850158691
```
