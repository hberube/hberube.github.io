>>> import smtplib
>>> smtpObj = smtplib.SMTP('smtp.example.com', 587)
>>> smtpObj.ehlo()
(250, b'mx.example.com at your service, [216.172.148.131]\nSIZE 35882577\
n8BITMIME\nSTARTTLS\nENHANCEDSTATUSCODES\nCHUNKING')
>>> smtpObj.starttls()
(220, b'2.0.0 Ready to start TLS')
>>> smtpObj.login('hugo.berube@gmail.com', 'MY_SECRET_PASSWORD')
(235, b'2.7.0 Accepted')

htmlExample =  "<html><header><title>This is title</title></header><body>Hello world</body></html>"

htmlPart = MIMEText(htmlExample, 'html')

>>> smtpObj.sendmail('hugo.berube@gmail.com', 'vicky.roy09@gmail.com', 'Subject: So
long.\n\nDear Alice, so long and thanks for all the fish. Sincerely, Bob')
{}


>>> smtpObj.quit()
(221, b'2.0.0 closing connection ko10sm23097611pbd.52 - gsmtp')

