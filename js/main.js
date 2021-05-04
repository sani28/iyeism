const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

// On scoll after first section, change icons to black

$(document).ready(function () {
    console.log("document loaded");
    $('#playAudioBlack').css("display", "none");
    $('#nav-sticky').css("display","none");
});

function backToTop() {
    const target = document.querySelector('#top-target');
    scroller.scrollTo(target);
}

// on scroll - show black audio player after first section and show white if less than second section
scroller.on('scroll', () => {

    let firstSection = $('#balance-container').offset().top;
    let secondSection = $('#intro-container').offset().top;
    var scrollPos = $(document).scrollTop();
    var isBlack = false;
    if (scrollPos > firstSection && isBlack == false) {
        $('#playAudioWhite').hide();
        $('#playAudioBlack').add();
        $('#playAudioBlack').css("display", "flex");
        $('#nav-sticky').add();
        $('#nav-sticky').fadeIn();
        isBlack == true;
    } else {
        isBlack == false;
        $('#nav-sticky').fadeOut();
        $('#playAudioBlack').hide();
        $('#playAudioWhite').add();
        $('#playAudioWhite').css("display", "block");

    }
});

// if white audio player is in view, trigger play/pause function

function playPauseWhite() {

    document.getElementById("playAudioWhite").addEventListener("click", function () {
        var audio = document.getElementById('audio');
        if (this.className == 'is-playing-w') {
            this.className = "";
            document.getElementById("pauseWhite").src = "./imgs/play-white.svg";
            audio.pause();
            console.log("paused white");
        } else {
            this.className = 'is-playing-w';
            audio.play();
            document.getElementById("pauseWhite").src = "./imgs/pause-white.svg";
            console.log("played white");
        }
    });
}

// if black audio player is in view, trigger play/pause function

function playPauseBlack() {

    document.getElementById("playAudioBlack").addEventListener("click", function () {
        var audio = document.getElementById('audio');
        if (this.className == "is-playing-b") {
            this.className = "";
            document.getElementById("pauseBlack").src = "./imgs/play-black.svg";
            audio.pause();
            console.log("paused black");
        } else {
            this.className = "is-playing-b";
            audio.play();
            document.getElementById("pauseBlack").src = "./imgs/pause-black.svg";
            console.log("played black");
        }
    });
}

playPauseWhite();
playPauseBlack();
