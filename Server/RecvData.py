# -*- coding:utf-8 -*-
import select, json, MySQLdb, time
from socket import *
from Models import config
from Models.ParseDataClass import ParseData
from Models.MonitorMongoClass import MonitorMongo

# 实例化数据格式化
parseClass = ParseData()

# 创建mysql连接
# mysqlConn= MySQLdb.connect(
#         host= config.MYSQL_HOST,
#         port = config.MYSQL_PORT,
#         user = config.MYSQL_USER,
#         passwd = config.MYSQL_PASS,
#         db = config.MYSQL_DB,
#         )
# cur = mysqlConn.cursor()
# ip = '127.0.0.1'
# sql = "SELECT * FROM `servers` WHERE host = '" + ip + "' limit 1"
# res = cur.execute(sql)

# 实例化ProcMongo
monitorMongo = MonitorMongo('monitor')

# 连接Socket
connectList = []
server = socket(AF_INET, SOCK_STREAM)
server.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
server.bind(('0.0.0.0', 8888))
server.listen(10)
connectList.append(server)
print '﻿正在等待客户端连接=========>'
while True:
    readSock, writeSock, errorSock = select.select(connectList, [], [])
    for sock in readSock:
        if sock == server:
            sockfd, addr = server.accept()
            connectList.append(sockfd)
            # print "Client (%s, %s) connected" % addr
        else:
            try:
                data = sock.recv(config.RECV_BUFFER)
                if data:
                    data = json.loads(data)
                    # print data
                    (ip, port) = sock.getpeername()
                    # 先把服务器加入到数据库中
                    # sql = "SELECT * FROM `server` WHERE host = '" + ip + "' limit 1"
                    # res = cur.execute(sql)
                    # if int(res) <= 0:
                    #     sql = "INSERT INTO `server`(host, status, time) VALUES (%s, %s, %s)"
                    #     cur.execute(sql,(ip, 1, time.time()))
                    #     cur.close()
                    #     cur.commit()
                    onData = parseClass.parse(data, ip)
                    # print onData
                    res = monitorMongo.save(onData)
                    print res
                    # print "Client (%s, %s) send data:\n %s" % (ip, port, data)
                    print ''
                    print ''
            except:
                continue

# cur.close()
server.close()