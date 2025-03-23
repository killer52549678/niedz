document.addEventListener("DOMContentLoaded", function () {
    if ("standalone" in window.navigator && window.navigator.standalone) {
        function hideAddressBar() {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 100);
        }

        hideAddressBar();
        window.addEventListener("resize", hideAddressBar);
        window.addEventListener("orientationchange", hideAddressBar);
        window.addEventListener("touchstart", hideAddressBar);
    }
});
