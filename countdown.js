// Countdown javascript for an important date, e.g. deadline of project
// Created by patriclouis @ ZJU on Oct. 3, 2013.

//<!--<script style="text/javascript" src="js/countdown.js"></script>-->

function countdown()
{
	Deadline = new Date("2013/10/31 23:59:00")
	today    = new Date() 
	t_gap    = (Deadline.getTime()-today.getTime())
	if (t_gap<=0)
	{
		if (t_gap<=0)
		{
			countdowndays.innerHTML = '0 days'
		    //alert('Deadline has passed!')
		    return false
		}
	}

	window.setTimeout("countdown()", 1000)

	//sectime = t_gap/1000
	//seconds = Math.floor(sectime)

	msPerDay= 24*60*60*1000 
	e_days  = t_gap/msPerDay 
	days    = Math.floor(e_days)

	e_hours = (e_days - days)*24 
	hours   = Math.floor(e_hours) 

	e_mins  = (e_hours-hours)*60 
	minutes = Math.floor((e_hours-hours)*60)
	seconds = Math.floor((e_mins -minutes)*60)

	countdowndays.innerHTML = "<b><align=center><font color=ff0000>&nbsp;"+ days +
	"<font color=0000ff>days</font> "+ hours + "<font color=0000ff>hours</font> " + minutes
	 + "<font color=0000ff>mins</font> " + seconds + "<font color=0000ff>s</font> " + "</b></font>" 
} 

countdown(); 
