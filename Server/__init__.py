import json
# a = {"hello": 1, 'world' : 2}
# b = json.dumps(a)
# print type(b)

import pymongo
conn = pymongo.MongoClient('127.0.0.1', 27017)
db = conn.monitor
data1 = {'type':'mem', 'time': '1456565432', 'value': 0.76}
data2 = {'type':'load', 'time': '1456565432', 'value': 0.86}
# data = json.dumps(data1) + ',' + json.dumps(data2)
print db.proc.insert([data1, data2])
