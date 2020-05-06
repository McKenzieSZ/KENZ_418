function pauseFunction() {
    if (video.paused) {
        video.play();
        pauseBtn.innerHTML = "Pause";
    } else {
        video.pause();
        pauseBtn.innerHTML = "Play";
    }
}
function switchLoop() { 

	if (video.loop){
     	loopBtn.innerHTML = "No loop";
        video.loop = false;
        video.load();  
     }else{
     	loopBtn.innerHTML = "Looping";
        video.loop = true;
        video.load(); 
     }   
}