import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# me == my email address
# you == recipient's email address
me = "hugo.berube@gmail.com"
you = "hugo.berube@gmail.com"

# Create message container - the correct MIME type is multipart/alternative.
msg = MIMEMultipart('alternative')
msg['Subject'] = "Link"
msg['From'] = me
msg['To'] = you

# Create the body of the message (a plain-text and an HTML version).
text = "Hi!\nHow are you?\nHere is the link you wanted:\nhttp://www.python.org"

html = """\
<html>
<head>
        <link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/css/main.css">
	<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/css/poolD3.css">
</head>
<body style="background-color: #ECF5FF;">
<center>
            <table style="width: 80%">
            	<tbody>
            		<tr>
            			<td>
            				<center><img src="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/img/pool-bg.png" style="width:100%"></center>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				<center>
            				<p style="color: #000000; font-weight: normal;letter-spacing: 2pt;word-spacing: 2.5pt;font-size: 1.9em;text-align: left;font-family: Verdana, sans-serif; line-height: 1; vertical-align: middle;">
            					Bravo Hugo, tu as eu une super semaine. Tu a &eacute;t&eacute; dans les meilleurs!
            				</p>
            				</center>
            			</td>
            		</tr>
            		<tr class="leadersScores img-rounded">
            			<td>
            				<center>
            				<table>
            					<tr>
                					<td class="img-rounded bg-info">
                						<img src="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/img/teamLogo/hugo.png" style="width: 225px;" title="The Vault Dwellers">
							</td>
                
	                				<td class="img-rounded bg-success ng-binding" style="width: 40%;">
	                					<p style="color: #000000; font-weight: normal;letter-spacing: 2pt;word-spacing: 2.5pt;font-size: 1.9em;text-align: left;font-family: Verdana, sans-serif; line-height: 1; vertical-align: middle;">
	                						<b>B:</b> 403&nbsp;[+0]<br><br>
	                						<b>P:</b> 632&nbsp;[+0]<br><br>
	                						<b>W:</b> 62&nbsp;[+0]<br><br>
	                						<b>SO:</b> 9&nbsp;[+0]<br><br>
	                						<b>Pts:</b> 1115&nbsp;[+0]<br><br>
	                					</p>
	                				</td>
	                			</tr>
	                		</table>
	                		</center>
                		</td>
                	</tr>
                	<tr>
				<td>
					<p style="color: #fff; background-color: #337ab7;font-weight: normal;letter-spacing: 2pt;word-spacing: 2.5pt;font-size: 1.9em;text-align: left;font-family: Verdana, sans-serif; line-height: 1; vertical-align: middle;">
			        		&nbsp;<b>Ton <font color="yellow">meilleur</font> joueur cette semaine:</b>
			        	</p>
			        </td>
			</tr>
			<tr>
				<td>
					<center>
					<table>
	                    			<tr>
							<td>
								<img class="img-rounded" src="http://1.cdn.nhle.com/photos/mugs/8474141.jpg">
								<br><b>Patrick Kane:</b>
								<br>B: 46, P: 60, Pts: 106
							</td>
                                		</tr>
	                    		</table>
	                    		</center>
				</td>
            		</tr>
            		<tr>
				<td>
					<p style="color: #fff; background-color: #337ab7;font-weight: normal;letter-spacing: 2pt;word-spacing: 2.5pt;font-size: 1.9em;text-align: left;font-family: Verdana, sans-serif; line-height: 1; vertical-align: middle;">
						&nbsp;<b>Ton <font color="red">pire</font> joueur cette semaine:</b>
					</p>
				</td>
			<tr>
			</tr>
				<td>
					<center>
					<table>
						<tr>
							<td>
								<img class="img-rounded" src="http://1.cdn.nhle.com/photos/mugs/8474053.jpg">
								<br><b>Logan Couture:</b>
								<br>B: 15, P: 21, Pts: 36
						        </td>
                                		</tr>
				        </table>
				        </center>
				</td>
            		</tr>
            		<tr>
            			<td>
            				<p style="color: #fff; background-color: #337ab7;font-weight: normal;letter-spacing: 2pt;word-spacing: 2.5pt;font-size: 1.9em;text-align: left;font-family: Verdana, sans-serif; line-height: 1; vertical-align: middle;">
						&nbsp;<img src="https://dl.dropboxusercontent.com/u/1217226/Pool_BerubeRoy_2017/img/plaster-rw.png" style="height:25px;">&nbsp;<b>Tes joueurs bless&eacute;s:</b>
					</p>
				</td>
			</tr>
			<tr>
            			<td class="playerNameTeam">
            				<center>
            					<img class="img-rounded" src="http://1.cdn.nhle.com/photos/mugs/8478402.jpg" valign="top" >&nbsp;
            					<br><b>Connor McDavid:</b>
            					<br>McDavid (collarbone) returned to practice Friday, reports the Oilers web site. (Jan 1)
            				</center>
            			</td>
            		</tr>
                </tbody>
              </table>
              
</center>
<br><br><i>***Si vous voulez ne plus recevoir ces &eacute;mail <a href="mailto:hugo.berube@gmail.com?subject=Cancel Weekly Pool Email&body=Je ne veux plus recevoir de mail automatis&eacute;. Merci.">SVP cliquer ici</a>.</i>
</body>
</html>
"""

# Record the MIME types of both parts - text/plain and text/html.
part1 = MIMEText(text, 'plain')
part2 = MIMEText(html, 'html')

# Attach parts into message container.
# According to RFC 2046, the last part of a multipart message, in this case
# the HTML message, is best and preferred.
msg.attach(part1)
msg.attach(part2)

# Send the message via local SMTP server.
#s = smtplib.SMTP('localhost')
# sendmail function takes 3 arguments: sender's address, recipient's address
# and message to send - here it is sent as one string.
#s.sendmail(me, you, msg.as_string())
#s.quit()

smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
smtpObj.starttls()
smtpObj.login('hugo.berube@gmail.com', 'bjlkrxoddifyhzxx')
smtpObj.sendmail(me, you, msg.as_string())
smtpObj.quit()

