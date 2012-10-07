var Utils = {};

Utils = {
};

/*
 * Returns a formatted string of the current timestamp
 */
Utils.getTimeStamp = function(){
	var d = new Date();

	var hours = d.getHours();
	hours = "" + hours;
	
	if(hours.length === 1)
		hours = "0" + hours;
	
	var minutes = d.getMinutes();
	minutes = "" + minutes;
	
	if(minutes.length === 1)
		minutes = "0" + minutes;
	
	var seconds = d.getSeconds();
	seconds = "" + seconds;

	if(seconds.length === 1)
		seconds = "0" + seconds;

	var timeStamp = hours + ":" + minutes + ":" + seconds;	
	
	return timeStamp;
};