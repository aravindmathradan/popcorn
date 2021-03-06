(function () {
    const BrowserWindow = remote.getCurrentWindow();
    
    BrowserWindow.on('maximize', () => {
        document.getElementById("max-btn").firstChild.classList.toggle("fa-window-restore");
        document.getElementById("max-btn").firstChild.classList.toggle("fa-window-maximize");
    });

    BrowserWindow.on('unmaximize', () => {
        document.getElementById("max-btn").firstChild.classList.toggle("fa-window-maximize");
        document.getElementById("max-btn").firstChild.classList.toggle("fa-window-restore");
    });

    function init() {


        document.getElementById("min-btn").addEventListener("click", function (e) {
            BrowserWindow.minimize();
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
            if (BrowserWindow.isMaximized()) {
                BrowserWindow.unmaximize();
            } else {
                BrowserWindow.maximize();
            }
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
            if (player) {
                player.dispose();
            }
            if (vttTempFilePath) {
                fs.unlinkSync(vttTempFilePath);
                vttTempFilePath = undefined;
            }
            BrowserWindow.close();
        });
    };
    init();
})();