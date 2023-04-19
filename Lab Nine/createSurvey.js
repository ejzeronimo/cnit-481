const video_categories = [
    {
        "id": "1",
        "title": "Film & Animation"
    },
    {
        "id": "2",
        "title": "Autos & Vehicles"
    },
    {
        "id": "10",
        "title": "Music"
    },
    {
        "id": "15",
        "title": "Pets & Animals"
    },
    {
        "id": "17",
        "title": "Sports"
    },
    {
        "id": "19",
        "title": "Travel & Events"
    },
    {
        "id": "20",
        "title": "Gaming"
    },
    {
        "id": "22",
        "title": "People & Blogs"
    },
    {
        "id": "23",
        "title": "Comedy"
    },
    {
        "id": "24",
        "title": "Entertainment"
    },
    {
        "id": "25",
        "title": "News & Politics"
    },
    {
        "id": "26",
        "title": "Howto & Style"
    },
    {
        "id": "27",
        "title": "Education"
    },
    {
        "id": "28",
        "title": "Science & Technology"
    },
    // {
    //   "id": "29",
    //   "title": "Nonprofits & Activism"
    // }
]

const choices = ["like", "neutral", "dislike"];

// NOTE: creating the survey
const targetFormDiv = document.getElementById("preference-survey");

// iterate over the categories
for (const category of video_categories) {
    let catName = document.createElement("p");
    catName.innerText = category.title;
    catName.id = "video-id-" + category.id;

    let catQuestion = document.createElement("div");
    catQuestion.appendChild(catName);

    // iterate over the possible choices
    for (choice in choices) {
        let button = document.createElement("input");
        button.value = choices[choice];
        button.id = ["preference", category.id, choice].join("-");
        button.name = "preference-" + category.id;
        button.type = "radio";

        let label = document.createElement("label");
        label.innerText = choices[choice];
        label.for = ["preference", category.id, choice].join("-");

        catQuestion.appendChild(button);
        catQuestion.appendChild(label);
    }

    targetFormDiv.appendChild(catQuestion);
}