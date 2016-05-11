# -*- coding:utf-8 -*-
import select, json
from socket import *
from Models import config
from Models.ParseDataClass import ParseData
from Models.ProcMongoClass import ProcMongo

# 实例化数据格式化
parseClass = ParseData()

# 实例化ProcMongo
procMongo = ProcMongo('monitor')

# 连接Socket
connectList = []
server = socket(AF_INET, SOCK_STREAM)
server.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
server.bind(('0.0.0.0', 8888))
server.listen(10)
connectList.append(server)

while True:
    readSock, writeSock, errorSock = select.select(connectList, [], [])
    for sock in readSock:
        if sock == server:
            sockfd, addr = server.accept()
            connectList.append(sockfd)
            # print "Client (%s, %s) connected" % addr
            # TODO:此处加上客户端上线
        else:
            try:
                data = sock.recv(config.RECV_BUFFER)
                if data:
                    data = json.loads(data)
                    (ip, port) = sock.getpeername()
                    onData = parseClass.parse(data, ip)
                    print onData
                    res = procMongo.save(onData)
                    print res
                    # TODO: 将数据添加到数据库
                    # print "Client (%s, %s) send data:\n %s" % (ip, port, data)
                    print ''
                    print ''
            except:
                continue

server.close()