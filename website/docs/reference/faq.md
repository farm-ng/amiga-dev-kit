---
id: faq
title: Frequently Asked Questions
---

## General

<details>
  <summary>How do I access and develop on the brain?</summary>
  <div>
     We have a dedicated webpage to help you connect your Amiga.
     Check out this <a href="/docs/ssh/">
      tutorial</a>
    </div>
</details>

<details>
  <summary>How do I update the Dashboard Firmware?</summary>
  <div>
     All latest updates are available online with detailed
     instructions that will take you step by step to a successful
     update.
    <br/><br/>
    - You can find more details at: <a href="/docs/dashboard/dashboard-fw">
      Dashboard Firmware Updates</a>.
    </div>
</details>

<details>
  <summary>Who do I get in touch with for errors with the Amiga?</summary>
  <div>
    To ensure we are continuous improving our software and hardware products, we have several
    channels to contact our support team:
      <br/>
      - The fastest way for general problems is, signing-in, search, and ask questions on our
    [Discourse Community](https://discourse.farm-ng.com/).
      - For particular cases, send us an email at support@farm-ng.com.
      - For software issues related to our open-sourced libraries, <a href="https://github.com/farm-ng/farm-ng-amiga/issues/new/choose">
      create a Bug Report on GitHub</a>.
      <br/>
      All support cases are subject to our
      <a href="https://github.com/farm-ng/farm-ng-amiga/issues/new/choose">Amiga Support Agreement</a>
    </div>
</details>

<details>
 <summary>What is the voltage level of the amiga pendant and brain?</summary>
 <div>
24v power is the voltage for the Brain and the Pendant. The batteries supply 44v (nominal) to the
main power circuit, and the PoE Switch uses a stabilized 48v source powered by 2 DC Converts (step
down and step up schema). For details, see [Base Amiga Electronics](../hardware/electronics.md).
   </div>
</details>

<details>
  <summary>How do I access the MAC address on Brain?</summary>
  <div>
    On your Brain main screen, navigate to Seetings > About >  Debug Terminal. Click `Show
    Keyboard` and type `ifconfig`. Scroll down the results of the command until you find the
    `wlan0` section. Your MAC address will be int he line that starts with `ether` and will be
    of the form `28:d0:aa:b5:12:ef`. Provide it for your network admin for whitelisting on your
    wi-fi network.
    </div>
</details>

## CAN bus

<details>
  <summary>
    What is the baud rate of the CAN bus the Amiga runs on?
  </summary>
  <div>
     The Amiga CAN bus runs at 250 kbps (250,000 bits per second).
    <br/><br/>
  </div>
</details>

## Brain App Development

<details>
  <summary>How can I create a new app for the brain?</summary>
  <div>
     Custom applications can be created on the brain from
     anywhere. We have a detailed tutorial on creating your first
     custom app on your Amiga.
    <br/><br/>
    - You can find more details at: <a href="/docs/brain/brain-apps">
      Developing Custom Applications</a>.
    </div>
</details>

<details>
  <summary>
    Why are other apps launching over the app I'm currently using?
  </summary>
  <div>
    **deprecation warning**<br/>
    This is out-of-date for brains running `v2.x` Amiga OS software.<br/>
    This video only applies to brains running Amiga OS `v1.x` versions.<br/>
    **end warning**<br/>
    <br/><br/>
    If you launch an app with the command line using an <code>entry.sh</code> script,
    it is currently possible to have touch interactions with the launcher behind.
    This will cause other installed apps to unexpectedly launch over the app you are trying to use.
    <br/><br/>
    If this is causing you issues,
    a simple workaround is to launch a basic, empty app that will block touches from the launcher.
    The <a href="https://github.com/farm-ng/amiga-app-template"><code>amiga-app-template</code>
    </a> is well suited for this.
    <br/><br/>
    In your terminal <code>ssh</code>'d in as the <code>amiga</code> user:
    <br/><br/>
    <code>
    cd ~/apps/
    </code>
    <br/>
    <code>
    git clone https://github.com/farm-ng/amiga-app-template.git
    </code>
    <br/><br/>
    Then launch the app template by clicking the <code>Amiga App Template</code> AppButton on the launcher
    before running your custom app with the <code>entry.sh</code> script.
    <br/><br/>
    Apps launched by clicking the AppButton should not experience this issue.
    </div>
</details>

## Using the REPL

<details>
  <summary>What is the REPL?</summary>
  <div>
    The REPL is the "Read-Evaluate-Print-Loop", an interactive
    terminal for running CircuitPython commands directly on the
    microcontroller.
    <br/><br/>
    Some basics:
    <br/>
    - You can interrupt the running code with <code>ctrl+C</code>
    <br/>
    - You can enter CircuitPython commands (or paste them with a
    right click) following the <code>>>></code> and run them with
    <code>Enter</code>
    <br/>
    - You can restart the previously running application with
    <code>ctrl+D</code>
    <br/>
    - You can find more details at: <a
      href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl">Adafruit "The REPL"</a>.
    </div>
</details>

<details>
  <summary>How do I connect to the REPL?</summary>
  <div>
    <div>
    There are multiple methods for connecting to the serial
    console of your microcontrollers (dashboard, pendant, MCU
    kit, etc.).
    <br/><br/>
    The Advanced serial console is recommended, but Mu is easier
    to get started with and has some useful added-on
    functionality (like a plotter for printed tuples).
    <br/><br/>
    The pendant, and other simple microcontrollers, will show up
    as a single serial port.
    The dashboard will show up as two ports, one for the console
    and one for data transfer.
    The first port should be the console you want to connect to
    for stopping the program, running commands in the REPL, etc.
    </div>
    <br/>
    <details>
      <summary>Advanced serial console</summary>
      <div>
        <details>
        <summary>Windows</summary>
        <div>
            See the adafruit docs for getting started with PuTTY: <a
            href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows">
            Windows serial console</a>.
        </div>
        </details>
        <details>
        <summary>Linux</summary>
        <div>
            See the adafruit docs for getting started with
            'screen' in your terminal: <a
            href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux">
            Linux serial console</a>.
        </div>
        </details>
        <details>
        <summary>Mac</summary>
        <div>
            See the adafruit docs for getting started with
            'screen' in your terminal: <a
            href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux">
            Mac serial console</a>.
            <br/><br/>
            TIP: Use autocomplete to get the correct usb modem
            <code>.../tty.usb[tab_for_autocomplete]</code>
        </div>
        </details>
      </div>
    </details>
    <details>
      <summary>Mu</summary>
      <div>
        Mu is the recommended starter serial console program by
        adafruit on their  <a href="https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console">CircuitPython
        serial console page</a>.
        Mu has a built in plotter for tuples printed to the
        serial console (print statements in the python code on
        your microcontroller), which can be convenient for
        debugging.
        <br/>
        <br/>
        However, we've found that Mu can be a little unstable,
        freezes occasionally, and lacks some useful advanced
        functionality.
        So we'd recommend checking out their links for the
        advanced serial consoles for most purposes.
      </div>
    </details>
  </div>
</details>

<details>
  <summary>Which port / console do I choose?</summary>
  <div>
    As described in the Adafruit advanced serial console links,
    you can query the devices on Linux & Mac with:<br/><code>ls /
    dev/ttyACM*</code> or find the Windows <code>COM</code> port
    in the Device Manager.
    <br/><br/>
    - The pendant, and other simple microcontrollers, will show
    up as a single serial port.
    <br/>
    - The dashboard will show up as two ports, one for the
    console and one for data transfer.
    The first port should be the console you want to connect to
    for stopping the program, running commands in the REPL, etc.
    <br/>
    <br/>
    Keep in mind that the ports will increment as you connect
    multiple devices.
  </div>
</details>
