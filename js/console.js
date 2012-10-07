/*
 * Code to control the console
 */

var Console = {};

//there are 4 message levels
Console = {
	NORMAL : 0,
	WARNING : 1,
	ERROR : 2,
	ALERT : 3,
};

Console.print = function(message,type){	
	var messageFormating;

	switch(type)
	{
		case this.WARNING:
		{
			messageFormating = '<span class="warning">';
			break;
		}

		case this.ERROR:
		{
			messageFormating = '<span class="error">';
			break;
		}
		
		case this.ALERT:
		{
			messageFormating = '<span class="alert">';
			break;
		}
				
		default:
		{
			messageFormating = '<span class="message">';
			break;
		}
	}

	$("#console").html(" " + Utils.getTimeStamp() + " : " + messageFormating + message + "</span><br />"+ $("#console").html() );

	//so the div is looking at the newest message and not
	//the oldest
	$("#console").scrollTop($(console)[0].scrollHeight);
};