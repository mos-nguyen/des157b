(function () {
    'use strict';
    console.log('reading js');

    

    const vietVideo = document.querySelector('#vietVideo');
    const expand = document.querySelector('.fa-expand');
    const play = document.querySelector('.fa-circle-play');
    const mute = document.querySelector('fa-volume-xmark');
    const exit = document.querySelector('fa-door-closed');
    let playing = false;

    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const third = document.querySelector('#third');
    const fourth = document.querySelector('#fourth');
    const fifth = document.querySelector('#fifth');

    const vietnamese = {
        start: [3, 9, 15, 21, 27],
        stop: [6, 12, 18, 24, 30],
        text: [first, second, third, fourth, fifth]
    }

    const intervalID = setInterval(checkTime, 1000);

    const loading = document.querySelector('.fa-ship');

    vietVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    expand.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            expand.className = 'fa-solid fa-compress';
        } else {
            document.exitFullscreen();
            expand.className = 'fa-solid fa-expand'
        }
    });

    play.addEventListener('click', function() {
        if (!playing) {
            vietVideo.play();
            play.className = 'fa-solid fa-pause';
            playing = true;
        } else {
            vietVideo.pause();
            play.className = 'fa-solid fa-circle-play';
            playing = false;
        }
    });

    mute.addEventListener('click', function() {
        if (mute.className === 'fa-solid fa-volume-high') {
            mute.className = 'fa-solid fa-volume-xmark';
            vietVideo.muted = true;
        } else {
            mute.className = 'fa-solid fa-volume-high';
            vietVideo.muted = false;
        }
    });

    function checkTime() {
        console.log(parseInt(vietVideo.currentTime));

        if (vietnamese.start[0] < vietVideo.currentTime && vietVideo.currentTime < vietnamese.stop[0]) {
            vietnamese.text[0].className = 'showing';
        } else {
            vietnamese.text[0].className = 'hidden';
        }

        if (vietnamese.start[1] < vietVideo.currentTime && vietVideo.currentTime < vietnamese.stop[1]) {
            vietnamese.text[1].className = 'showing';
        } else {
            vietnamese.text[1].className = 'hidden';
        }

        if (vietnamese.start[2] < vietVideo.currentTime && vietVideo.currentTime < vietnamese.stop[2]) {
            vietnamese.text[2].className = 'showing';
        } else {
            vietnamese.text[2].className = 'hidden';
        }

        if (vietnamese.start[3] < vietVideo.currentTime && vietVideo.currentTime < vietnamese.stop[3]) {
            vietnamese.text[3].className = 'showing';
        } else {
            vietnamese.text[3].className = 'hidden';
        }

        if (vietnamese.start[4] < vietVideo.currentTime && vietVideo.currentTime < vietnamese.stop[4]) {
            vietnamese.text[4].className = 'showing';
        } else {
            vietnamese.text[4].className = 'hidden';
        }
    }

})();