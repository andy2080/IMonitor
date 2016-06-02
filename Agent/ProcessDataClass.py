# -*- coding:utf-8 -*-
import Queue, json, threading, time
from BaseClass import Base
from LogDataClass import LogData
from ProcDataClass import ProcData
from SendDataClass import SendData
class ProcessData(Base):
    '''
    数据处理类
    将从服务器获取到的数据打包放入队列并等待传输
    '''
    number = 5
    sleep = 0.1
    exception = ['__init__', 'number', 'sleep', 'exception', '__doc__', '__module__']
    def __init__(self, queue = Queue.Queue()):
        self.dataQueue = queue
        self.proc = ProcData()

    def putLoadAvg(self):
        '''
        loadAvg入队
        :return:
        '''
        while True:
            loadData = []
            for i in range(self.number):
                load = self.proc.getLoadAvg()
                loadData.append([self.getTime(),load[2]])
                time.sleep(self.sleep)
            data = {'load':loadData}
            self.dataQueue.put_nowait(data)

    def putMemUsage(self):
        '''
        入队内存使用率
        :return:
        '''
        while True:
            memData = []
            for i in range(self.number):
                memUsage = self.proc.getMemUsage()
                memData.append([self.getTime(), memUsage])
                time.sleep(self.sleep)
            data = {'mem':memData}
            self.dataQueue.put_nowait(data)

    def putNetIO(self):
        '''
        网络流量入队
        :return:
        '''
        while True:
            in_net = []
            out_net = []
            for i in range(self.number):
                netIO = self.proc.getNetIO()
                in_net.append([self.getTime(), netIO['in_net']])
                out_net.append([self.getTime(), netIO['out_net']])
                time.sleep(self.sleep)
            data = {'in_net':in_net, 'out_net':out_net}
            self.dataQueue.put_nowait(data)

    def putUptime(self):
        '''
        获取系统运行时间及空闲时间
        :return:
        '''
        while True:
            run = []
            free = []
            for i in range(self.number):
                uptime = self.proc.getUptime()
                run.append([self.getTime(), uptime['run']])
                free.append([self.getTime(), uptime['free']])
                time.sleep(self.sleep)
            data = {'run':run, 'free':free}
            self.dataQueue.put_nowait(data)

    def putStat(self):
        while True:
            usageData = []
            for i in range(self.number):
                stat1 = self.proc.getStat()
                time.sleep(self.sleep)
                stat2 = self.proc.getStat()
                time.sleep(self.sleep)
                usage = (float(stat2['idle']['cpu']) - float(stat1['idle']['cpu'])) / (float(stat2['total']['cpu']) - float(stat1['total']['cpu']))
                usageData.append([self.getTime(), usage])
            data = {'stat':usageData}
            self.dataQueue.put_nowait(data)

    def get(self):
        '''
        读取队列
        :return:
        '''
        send = SendData()
        while True:
            data = self.dataQueue.get()
            data = json.dumps(data)
            send.sendData(data)

    def start(self):
        dict = self.__class__.__dict__
        for function in dict:
            if function not in self.exception:
                target = function
                t = threading.Thread(target=getattr(self, target))
                t.start()

        # t = threading.Thread(target=self.putLoadAvg)
        # t.start()
        # t3 = threading.Thread(target=self.putMemUsage)
        # t3.start()
        # # t2 = threading.Thread(target=self.get)
        # # t2.start()
        # t4 = threading.Thread(target=self.putStat)
        # t4.start()