document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-player');
    const video = document.querySelector('.video');
    const overlay = document.querySelector('.overlay');

    videoContainer.addEventListener('mouseenter', playVideo);
    videoContainer.addEventListener('mouseleave', pauseVideo);
    
    videoContainer.addEventListener('touchstart', playVideo);
    videoContainer.addEventListener('touchend', pauseVideo);



    function playVideo() {
        video.play();
        overlay.style.opacity = '0';
    
    }

    function pauseVideo() {
        video.pause();
        overlay.style.opacity = '1';
    }


})