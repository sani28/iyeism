var iframe = document.querySelector('iframe');
var iframePlayer = new Vimeo.Player(iframe);

function playTimeStamp1() {
    iframePlayer.setCurrentTime(0);
    iframePlayer.play();
}
function playTimeStamp2() {
    iframePlayer.setCurrentTime(188);
    iframePlayer.play();
}
function playTimeStamp3() {
    iframePlayer.setCurrentTime(225);
    iframePlayer.play();
}
function playTimeStamp4() {
    iframePlayer.setCurrentTime(285);
    iframePlayer.play();
}
iframePlayer.on('play', function () {
});