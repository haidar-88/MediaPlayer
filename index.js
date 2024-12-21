const audio = document.getElementById("myAudio");
const pp = document.getElementById("pp");
const name = document.getElementById("text");
let songs = ["song 1.mp3", "song 2.mp3", "song 3.mp3", "song 4.mp3"];
let names = ["Idol - SUICIDAL", "Hardy Boys - YEAT", "Talk - YEAT", "Tell Me - YEAT"];
let index = 0;
let playing = null;
let angle = 0;
let interval;

function rewind(){
    index--;
    if (index==-1){
        index = songs.length-1;
    }
    if (!playing){
        playing = !playing;
        pp.innerText ="⏸";
        startRotation();
    }
    name.innerText = names[index];
    audio.src = songs[index]
    audio.play();
}   

function playpause(){
    if (playing==null){
        audio.src = songs[index];
        audio.play();
        playing = true;
        pp.innerText ="⏸";
        startRotation();
    }
    else if (playing){
        audio.pause();
        playing = false;
        pp.innerText = "⏵";
        stopRotation();
    }
    else{
        audio.play();
        playing = true;
        pp.innerText ="⏸";
        startRotation();
    }
    name.innerText = names[index];
}
function forward(){
    index = (index+1)%songs.length;
    audio.src = songs[index];
    audio.play();
    if (!playing){
        playing = !playing;
        pp.innerText ="⏸";
        startRotation();
    }
    name.innerText = names[index];
}


function startRotation() {
    if (!interval) {
    interval = setInterval(() => {
        angle += 1; 
        document.getElementById('logo').style.transform = `rotate(${angle}deg)`;
    }, 10); 
    }
}

function stopRotation() {
    clearInterval(interval);
    interval = null; 
}
