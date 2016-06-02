# -*- coding:utf-8 -*-
from ProcDataClass import ProcData
from LogDataClass import LogData
from ProcessDataClass import ProcessData
from SendDataClass import SendData
import globalValue

import time
import Queue
import threading
if __name__ == '__main__':
    print "正在连接服务端并向服务端发送数据======>"
    process = ProcessData(globalValue.QUEUE)
    process.start()
    # th = threading.Thread(target=process.get)
    # th.start()
    # proc = ProcData()
    # print proc.getStat()
    # print proc.getNetIO()
    # print ProcData.__dict__
    # sock = SendData()
    # while True:
    #     sock.sendData('hello')
    #     time.sleep(0.5)