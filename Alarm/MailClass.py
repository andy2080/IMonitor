# -*- coding: utf-8 -*-
import config, smtplib
from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr

class Mail:
    smtp_server = config.SMTP_SERVER
    fromAddr = config.SMTP_SEND_MAIL
    password = config.SMTP_SEND_PASS
    toAddr = None
    debug = False
    subject = None
    server = None

    def __init__(self, debug = False):
        self.debug = debug
        self.server = smtplib.SMTP(self.smtp_server, config.SMTP_PORT)
        self.server.set_debuglevel(self.debug)
        self.server.login(self.fromAddr, self.password)


    def _format_addr(self, s):
        name, addr = parseaddr(s)
        return formataddr(( \
            Header(name, 'utf-8').encode(), \
            addr.encode('utf-8') if isinstance(addr, unicode) else addr))

    def send(self, toAddr, subject, message):
        msg = MIMEText(message, 'plain', 'utf-8')
        msg['From'] = self._format_addr(self.fromAddr)
        msg['To'] = self._format_addr(toAddr)
        msg['Subject'] = Header(subject, 'utf-8').encode()
        self.server.sendmail(self.fromAddr, toAddr, msg.as_string())
        self.server.quit()


