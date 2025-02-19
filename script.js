document.getElementById('startJourney').addEventListener('click', function() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const now = new Date();
    const start = new Date(now.toDateString() + ' ' + startTime);
    const end = new Date(now.toDateString() + ' ' + endTime);

    if (start.getTime() >= end.getTime()) {
        alert("End time should be after start time!");
        return;
    }

    const totalDuration = end - start;
    const updateProgress = () => {
        const current = new Date();
        let progress = ((current - start) / totalDuration) * 100;
        progress = Math.min(100, Math.max(0, progress)); // Clamp between 0 and 100

        document.getElementById('progressBar').innerHTML = `<div style="width: ${progress}%"></div>`;
        if (progress < 100) {
            setTimeout(updateProgress, 1000); // Update every second
        }
    };

    updateProgress();
});
