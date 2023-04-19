const preferenceSurvey = targetFormDiv.parentElement;
const videoDiv = document.getElementById("videos");
const YOUTUBE_API_KEY = "your api key here";
const threshold = window.innerHeight / 2;

// NOTE: whenever something in the form is changed, it runs the loadVideo function to get more shorts
preferenceSurvey.addEventListener("change", function (e) {
    loadVideo();
});

// NOTE: scrolls the div containing the shorts into view
preferenceSurvey.addEventListener("submit", function (e) {
    e.preventDefault();
    videoDiv.scrollIntoView();
})

// NOTE: when an iframe is off the screen this tells it stop, and when it it onscreen it tells it to play
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
    let query = "";
    let trailingMatch = / \| $/gm;

    for (choice of targetFormDiv.querySelectorAll("input")) {
        if (choice.checked && choice.id.split("-")[2] != '2') {
            query += choice.parentElement.firstChild.innerText.replace("&", "|") + " | ";
        }
    }

    return query.replace(trailingMatch, "");
}

// NOTE: generate uri and make iframe
async function loadVideo() {
    let query = getQueryStr();

    let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=5&q=${query}&videoCategoryId=42`;
    let responseItems = await fetch(url).then(res => res.json().then(data => { return data.items }));

    for (item of responseItems) {
        let shortsFrame = document.createElement("iframe");
        shortsFrame.allow = "autoplay";
        shortsFrame.loading = "lazy";
        shortsFrame.src = `https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1`;

        videoDiv.appendChild(shortsFrame);
    }
}