# -*- coding: utf-8 -*-
from GetRulesClass import GetRules
from GetMonitorDataClass import GetMonitorData
from MailClass import Mail
import config
if __name__ == '__main__':
    mail = Mail()
    getRules = GetRules(config.MONGO_DBNAME)
    getMonitorData = GetMonitorData(config.MONGO_DBNAME)
    while True:
        rulesData = getRules.getRule()
        for data in rulesData:
            print data
            print data['threshold']
            print data['host']
            define = {'type': data['monitor'], 'host': data['host']}
            avg = getMonitorData.getDataAvg(getMonitorData.getDataByDefine(define))
            print avg
            if float(avg) > float(data['threshold']):
                print '发送邮件---->'
                message = u'您好,您的机器<' + data['host'] + u'>的[' + data['monitor'] + u']已经超过阈值,请及时查看'
                mail.send('unstring@163.com', '[IMonitor]监控报警', message)


