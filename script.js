document.getElementById('startButton').addEventListener('click', function() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const now = new Date();
    const start = new Date(now.toDateString() + ' ' + startTime);
    const end = new Date(now.toDateString() + ' ' + endTime);
    const totalDuration = (end - start) / 1000; // in seconds

    function updateProgress() {
        const currentTime = new Date();
        let elapsedTime = (currentTime - start) / 1000; // in seconds
        
        // Limit elapsed time to total duration
        elapsedTime = Math.min(elapsedTime, totalDuration);

        let progress = (elapsedTime / totalDuration) * 100;
        document.getElementById('car').style.left = progress + '%';
        
        // Update the width of the green progress part
        document.querySelector('.progress-bar::after').style.width = progress + '%';

        if (progress < 100) {
            requestAnimationFrame(updateProgress);
        }
    }

    updateProgress();
});
