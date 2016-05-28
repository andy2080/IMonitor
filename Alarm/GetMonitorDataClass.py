# -*- coding: utf-8 -*-
import pymongo
import config
class GetMonitorData:
    '''
    获取监控数据
    '''
    mongoClient = None
    db = None

    def __init__(self, dbName):
        try:
            self.mongoClien = pymongo.MongoClient(config.MONGO_HOST, config.MONGO_PORT)
        except Exception as e:
            self.error = e
        try:
            self.db = getattr(self.mongoClien, dbName)
        except Exception as e:
            self.error = e

    def getDataByMonitor(self, monitor, num = 50):
        '''
        获取监控项数据
        :param monitor: 监控项名称
        :param num: 取数据条数
        :return:
        '''
        try:
            res = self.db.monitor_data.find({'type': monitor}).limit(num)
            return res
        except Exception as e:
            self.error = e
            return e

    def getDataByDefine(self, define, num = 50):
        '''
        根据自定义条件获取数据
        :param define:
        :param num:
        :return:
        '''
        try:
            res = self.db.monitor_data.find(define).limit(num)
            return res
        except Exception as e:
            self.error = e
            return e

    def getDataAvg(self, data):
        '''
        通过数据获取平均数据
        :param data: mongo结果集
        :return: 平均值
        '''
        sum = 0.0
        j = 0
        for i in data:
            j += 1
            sum += float(i['value'])
        if j == 0:
            return 0
        return sum / j
