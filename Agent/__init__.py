# -*- coding:utf-8 -*-
from ProcDataClass import ProcData
from LogDataClass import LogData
from ProcessData import ProcessData
import globalValue

import time
import Queue
import threading
if __name__ == '__main__':
    process = ProcessData(globalValue.QUEUE)
    process.start()
    # proc = ProcData()
    # print proc.getStat()
    # print proc.getNetIO()
    # print ProcData.__dict__