let pdfsLoaded = {
    screenOff: false,
    screenOn: false
};

function pdfLoaded(pdfId) {
    pdfsLoaded[pdfId] = true;
    if (pdfsLoaded.screenOff && pdfsLoaded.screenOn) {
        document.getElementById('loading-bar').style.width = '100%'; // Fill the loading bar
        setTimeout(function() {
            document.getElementById('loading-overlay').style.display = 'none';
            setTimeout(function() {
                document.getElementById('screenOn').style.opacity = 1;
                setTimeout(function() {
                    document.getElementById('screenOn').classList.add('zoom-in');
                    document.getElementById('screenOff').style.opacity = 0;
                }, 2000); // 2-second delay before zoom-in
            }, 3000); // 3-second delay before showing screenOn
        }, 2000); // Small delay to ensure loading bar completion
    }
}

window.onload = function() {
    // We don't need to do anything specific on window load for the bar now
}
