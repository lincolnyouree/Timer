var timeLeft = 100;

var timer = setInterval(function(){
document.getElementById('countdown').innerHTML = timeLeft + ' seconds remaining.'
timeLeft -= 1; 
if(timeLeft < 0) {
    document.getElementById('countdown').innerHTML = 'Finished!'
}}, 1000); 