
var fallInLoveMoment = moment('2016-02-26 19:00:00')

var diff = fallInLoveMoment.fromNow()
document.getElementById('conclusion').innerText = 'We start the relationship ' + diff + ','

diff = moment().diff(fallInLoveMoment, 'day')
document.getElementById('counting-d').innerText = 'which is ' + diff + ' days,'

var sCountingDiv = document.getElementById('counting-s')
function updateSecond() {
	diff = moment().diff(fallInLoveMoment, 'second')
	sCountingDiv.innerText = 'or ' + diff + ' seconds,'
}
function updateSecondSetTimeout() {
	updateSecond()
	setTimeout(updateSecondSetTimeout, 147)
}

updateSecondSetTimeout()
