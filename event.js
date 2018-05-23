document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("tricon-bot-sigma-header").addEventListener('click', toggle);
});

toggle = () => {
    window.parent.document.getElementById('tricon-bot-sigma').class = "iframe-collapsed";
}