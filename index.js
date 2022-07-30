
console.log('WElcome to spommi')

let songIndex = 0;
let audioElement = new Audio('flow/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Song 1",  filePath: "flow/songs/1.mp3", coverPath: "flow/covers/1.jpg"},
    {songName: "Song 2",  filePath: "flow/songs/2.mp3", coverPath: "flow/covers/2.jpg"},
    {songName: "Song 3",  filePath: "flow/songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song 4",  filePath: "flow/songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song 5",  filePath: "flow/songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song 6",  filePath: "flow/songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song 7",  filePath: "flow/songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song 8",  filePath: "flow/songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song 9",  filePath: "flow/songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song 10",  filePath: "flow/songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((element ,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].filePath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// let audioElement = new audioElement('songs/1.mp3')

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{console.log('timeupdate');
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100; 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `flow/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = flow/songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})