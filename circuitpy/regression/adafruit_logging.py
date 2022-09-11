num_debugs = 0
num_warnings = 0

class Logger:

    def setLevel(self, n):
        pass

    def addHandler(self, h):
        pass

    def debug(self, *s):
        global num_debugs
        num_debugs += 1

    def warning(self, fmt, *s):
        global num_warnings
        # print('WARNING', fmt % s)
        num_warnings += 1

def getLogger(name):
    return Logger()

class PrintHandler():
    def emit(self, m):
        pass

WARNING = 1
