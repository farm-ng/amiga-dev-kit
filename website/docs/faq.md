---
id: faq
title: Frequently asked questions
---

## Where can I get support?

:::caution coming soon
Link to support page
:::


## Using the REPL

<details>
  <summary>What is the REPL?</summary>
  <div>
    The REPL is the "Read-Evaluate-Print-Loop", an interactive terminal for running CircuitPython commands directly on the microcontroller.
    <br/><br/>
    Some basics:
    <br/>
    - You can interrupt the running code with <code>ctrl+C</code>
    <br/>
    - You can enter CircuitPython commands (or paste them with a right click) following the <code>>>></code> and run them with <code>Enter</code>
    <br/>
    - You can restart the previously running application with <code>ctrl+D</code>
    <br/>
    - You can find more details at: <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl">Adafruit "The REPL"</a>.
    </div>
</details>

<details>
  <summary>How do I connect to the REPL?</summary>
  <div>
    <div>
    There are multiple methods for connecting to the serial console of your microcontrollers (dashboard, pendant, MCU kit, etc.).
    <br/><br/>
    The Advanced serial console is recommended, but Mu is easier to get started with and has some useful added-on functionality (like a plotter for printed tuples).
    <br/><br/>
    The pendant, and other simple microcontrollers, will show up as a single serial port.
    The dashboard will show up as two ports, one for the console and one for data transfer.
    The first port should be the console you want to connect to for stopping the program, running commands in the REPL, etc.
    </div>
    <br/>
    <details>
      <summary>Advanced serial console</summary>
      <div>
        <details>
        <summary>Windows</summary>
        <div>
            See the adafruit docs for getting started with PuTTY: <a href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-windows">Windows serial console</a>.
        </div>
        </details>
        <details>
        <summary>Linux</summary>
        <div>
            See the adafruit docs for getting started with 'screen' in your terminal: <a href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-linux">Linux serial console</a>.
        </div>
        </details>
        <details>
        <summary>Mac</summary>
        <div>
            See the adafruit docs for getting started with 'screen' in your terminal: <a href="https://learn.adafruit.com/welcome-to-circuitpython/advanced-serial-console-on-mac-and-linux">Mac serial console</a>.
            <br/><br/>
            TIP: Use autocomplete to get the correct usb modem <code>.../tty.usb[tab_for_autocomplete]</code>
        </div>
        </details>
      </div>
    </details>
    <details>
      <summary>Mu</summary>
      <div>
        Mu is the recommended starter serial console program by adafruit on their  <a href="https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console">CircuitPython serial console page</a>.
        Mu has a built in plotter for tuples printed to the serial console (print statements in the python code on your microcontroller), which can be convenient for debugging.
        <br/>
        <br/>
        However, we've found that Mu can be a little unstable, freezes occasionally, and lacks some useful advanced functionality.
        So we'd recommend checking out their links for the advanced serial consoles for most purposes.
      </div>
    </details>
  </div>
</details>


<details>
  <summary>Which port / console do I choose?</summary>
  <div>
    As described in the Adafruit advanced serial console links,
    you can query the devices on Linux & Mac with:<br/><code>ls /dev/ttyACM*</code> or find the Windows <code>COM</code> port in the Device Manager.
    <br/><br/>
    - The pendant, and other simple microcontrollers, will show up as a single serial port.
    <br/>
    - The dashboard will show up as two ports, one for the console and one for data transfer.
    The first port should be the console you want to connect to for stopping the program, running commands in the REPL, etc.
    <br/>
    <br/>
    Keep in mind that the ports will increment as you connect multiple devices.
  </div>
</details>
