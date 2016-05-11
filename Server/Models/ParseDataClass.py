# -*- coding: utf-8 -*-
import json
class ParseData:

    def __init__(self):
        pass

    def parse(self, data = {}, addr = ''):
        result = []
        keys = data.keys()
        for key in keys:
            for value in data[key]:
                result.append({'ip': addr, 'type': key, 'time': value[0], 'value': value[1]})
            # result.append(temp)
        return result

# s = '[[{"name":"niaochao","point":{"lat":"39.990","lng":"116.397"},"desc":"aoyunhuizhuchangdi"}]]'
# s = "﻿[{'type': 'load', 'value': '1.90', 'time': '1462936748'}, {'type': 'load', 'value': '1.90', 'time': '1462936749'}, {'type': 'load', 'value': '1.90', 'time': '1462936749'}, {'type': 'load', 'value': '1.90', 'time': '1462936749'}, {'type': 'load', 'value': '1.90', 'time': '1462936749'}]"
# a = [{'type': 'load', 'value':'1.90'},{'type': 'mem', 'value':'1.90'}]
# s = json.dumps(a)
# # print s
# locations = json.loads(s)
# from ProcMongoClass import ProcMongo
# mongo = ProcMongo('monitor')
# mongo.save(locations)
# print mongo.error
# print locations