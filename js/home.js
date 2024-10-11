document.getElementById('github-icon').addEventListener('click', function() {
    window.location.href = 'https://github.com/LeoTeiSil';
});

document.addEventListener('DOMContentLoaded', function() {
    const githubIcon = document.getElementById('github-icon');
    if (githubIcon) {
        githubIcon.addEventListener('click', function() {
            window.location.href = 'https://github.com/LeoTeiSil';
        });
    }

    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = '../downloads/Portfolio_Leonardo.zip';
            link.download = 'Portfolio_Leonardo.zip';
            link.click();
        });
    }
});


