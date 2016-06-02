# -*- coding: utf-8 -*-
import pymongo, config
class GetRules:
    '''
    获取报警规则
    '''

    mongoClien = None
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

    def getRule(self, page = 1, limit = 10):
        '''
        获取全部报警规则
        :param page: 页码
        :param limit: 每页数据条数
        :return:
        '''
        start = (page - 1) * limit
        end = start + limit
        return self.db.rules.find().skip(start).limit(end)

    def getRuleByManager(self, manager, page = 1, limit = 10):
        '''
        通过管理员获取报警规则
        :param manager: 管理员邮箱
        :param page: 页码
        :param limit: 每页条数
        :return:
        '''
        start = (page - 1) * limit
        end = start + limit
        return self.db.rules.find({'manager':manager}).skip(start).limit(end)

    def getRuleByName(self, name, page = 1, limit = 10):
        '''
        通过监控项规则名称获取报警规则
        :param name: 监控名称
        :param page: 页码
        :param limit: 每页条数
        :return:
        '''
        start = (page - 1) * limit
        end = start + limit
        return self.db.rules.find({'name':name}).skip(start).limit(end)

    def getRuleByDefine(self, where, page = 1, limit = 10):
        '''
        通过where条件获取数据
        :param where: 条件
        :param page: 页码
        :param limit: 每页条数
        :return:
        '''
        start = (page - 1) * limit
        end = start + limit
        return self.db.rules.find(where).skip(start).limit(end)