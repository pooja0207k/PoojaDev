document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector("a[download]");
    if (downloadButton) {
        downloadButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Your resume will start downloading!");
            window.location.href = downloadButton.getAttribute("href");
        });
    }
});
