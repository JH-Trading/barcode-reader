const playAlertAudio = () => {
    const audioContainer = document.querySelector('#audioContainer');
    const source = document.querySelector('#audioSource');
    source.src = `resources/audio/9928BE4D5CE2D4EE16.mp3`;
    audioContainer.load();

    audioContainer.volume = 1.0;
    audioContainer.loop = false;
    audioContainer.play();

    let count = 0;
    const intervalId = setInterval(() => {
        if (count < 2) {
            audioContainer.currentTime = 0; // Reset audio to start
            audioContainer.play();
            count++;
        } else {
            clearInterval(intervalId); // Stop the interval after 3 plays
        }
    }, 1000); // 1 second interval
}