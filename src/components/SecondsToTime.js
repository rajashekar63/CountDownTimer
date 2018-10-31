const secondsToTime = (secs) => {
	const divisonForMinutes = secs % (60 * 60),
		hours = Math.floor(secs / (60 * 60)),
		minutes = Math.floor(divisonForMinutes / 60),
		seconds = Math.ceil(divisonForMinutes % 60),
		padStartHours = (hours < 10 ? '0' : '') + hours,
		padStartMinutes = (minutes < 10 ? '0' : '') + minutes,
		padStartSeconds = (seconds < 10 ? '0' : '') + seconds;

	return `${padStartHours}:${padStartMinutes}:${padStartSeconds}`;
}

export default secondsToTime;