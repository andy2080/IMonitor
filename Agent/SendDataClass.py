# -*- coding:utf-8 -*-
from BaseClass import Base
from config import *
from socket import *
class SendData(Base):
    '''
    发送数据
    '''
    socketClient = None
    def __init__(self):
        if self.socketClient is None:
            self.socketClient = socket(AF_INET, SOCK_STREAM)
            self.socketClient.connect((SOCKET_IP, SOCKET_PORT))

    def sendData(self, data = None):
        if data is None:
            return False
        while True:
            res = self.socketClient.send(data)
            if res:
                break