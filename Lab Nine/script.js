const preferenceSurvey = preferenceSurveyDiv.parentElement;
const videoDiv = document.getElementById("videos");
const YOUTUBE_API_KEY = "";
const threshold = window.innerHeight / 2;

// STEP 5: can you explain what the following code does? Please describe the user interaction it enables. A user interaction can be: "every time the user click on the button, the color of the header will get darker."
preferenceSurvey.addEventListener("change", function (e) {
    loadVideo();
});

// STEP 5: can you explain what the following code does? Please describe the user interaction it enables. A user interaction can be: "every time the user click on the button, the color of the header will get darker."
preferenceSurvey.addEventListener("submit", function (e) {
    e.preventDefault();
    videoDiv.scrollIntoView();
})

// STEP 5: can you explain what the following code does? Please describe the user interaction it enables. A user interaction can be: "every time the user click on the button, the color of the header will get darker." 
window.addEventListener("scroll", function () {
    for (myframe of document.querySelectorAll("iframe")) {
        let myOffset = window.scrollY - myframe.offsetTop;
        if (myOffset > (0 - threshold) && myOffset < threshold) {
            myframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
        } else {
            myframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*');
        }
    }
})

// NOTE: create a query string
function getQueryStr() {
    // STEP 2
}

async function loadVideo() {
    const query = getQueryStr();

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=5&q=${query}&videoCategoryId=42`;

    // STEP 3 and STEP 4
}