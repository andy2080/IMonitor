# -*- coding: utf-8 -*-
from GetRulesClass import GetRules
from GetMonitorDataClass import GetMonitorData
from MailClass import Mail
import config
if __name__ == '__main__':
    mail = Mail()
    getRules = GetRules(config.MONGO_DBNAME)
    getMonitorData = GetMonitorData(config.MONGO_DBNAME)
    print '正在计算监控数据并比对报警规则----->'
    while True:
        rulesData = getRules.getRule()
        for data in rulesData:
            define = {'type': data['monitor'], 'ip': data['host']}
            print define
            # print getMonitorData.getDataByDefine(define)
            avg = getMonitorData.getDataAvg(getMonitorData.getDataByDefine(define))
            print avg
            print data['threshold']
            if float(avg) >= float(data['threshold']):
                print '发送邮件---->'
                message = u'您好,您的机器<' + data['host'] + u'>的[' + data['monitor'] + u']已经超过阈值,请及时查看'
                mail.send('unstring@163.com', '[IMonitor]监控报警', message)
                print '发送成功'


