import time


class Listener:
    pass


class CAN:

    state = None

    def __init__(self, rx, tx, baudrate, auto_restart):
        self.empty()

    def empty(self):
        self.sent = []

    def send(self, msg):
        # print(f"{msg=}")
        self.sent.append(msg)

    def listen(self, timeout=10):
        return Listener()


class Message:
    def __init__(self, id, data, extended=False):
        self.id = id
        self.data = data

    def __repr__(self):
        return f"<Message {self.id}: {self.data}>"


class vcan0_canio_wrapper(object):
    def __init__(self, can="vcan0", rx=None, tx=None, baudrate=None, auto_restart=None):
        """
        NOTE: rx, tx, baudrate, auto_restart all unused
        Added for compatability with canio_wrapper from utils/can.py
        """
        import client.canio as canio

        self.can = canio.CANSocket(interface=can)
        self.sendQueue = dict()
        self.lastSendTime = 0.0
        self.sendTimeout = 0.005

    @property
    def state(self):
        return self.can.state

    def listen(self, timeout=0.0, callback=None):
        return self.can.listen(timeout, callback)

    # TODO: Add methods to expose canio.CAN functionality
    def send(self, msg):
        if len(msg.data) == 0:
            msg.data = b""  # Ensure data is a bytes object
        self.can.send(msg.id, msg.data)

    # def send_some(self):
    #     now = time.monotonic()
    #     if now - self.lastSendTime < self.sendTimeout:
    #         return
    #     self.lastSendTime = now

    #     for node_id, sendQueue in self.sendQueue.items():
    #         if not len(sendQueue):
    #             continue
    #         # print(f'There are {len(sendQueue)} messages on the queue for node id {node_id:02x}')
    #         msg = sendQueue[0]
    #         self.send(msg)
    #         del sendQueue[0]

    # def enqueue_send(self, msg):
    #     if msg.id not in self.sendQueue:
    #         self.sendQueue[msg.id] = []
    #     self.sendQueue[msg.id].append(msg)
