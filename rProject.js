// VARIABLES
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const healthBtn = document.getElementById("health");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
let newsDataArr = [];

// API'S

const apiKey = `b0947a01b42e435489bc658d6f0abe9a`;
const headlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const generalNews = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`;
const businessNews = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
const healthNews = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`;
const sportsNews = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
const techNews = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`;
const entertainmentNews = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`;
const searchNews = `https://newsapi.org/v2/everything?q=`;


window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};
generalBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>General</h4>";
    fetchGeneralNews();
});
businessBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});
healthBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Health</h4>";
    fetchHealthNews();
});
sportsBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});
technologyBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechNews();
});
entertainmentBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});
searchBtn.addEventListener("click", function () {
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(headlines);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}
const fetchGeneralNews = async () => {
    const response = await fetch(generalNews);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";

    }
    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(businessNews);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
    displayNews();
}
const fetchHealthNews = async () => {
    const response = await fetch(healthNews);
    // console.log("Before Response");
    // console.log(response);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        console.log("Before Response2");
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        //return newsDataArr;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
        return;
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(sportsNews);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
    displayNews();
}
const fetchTechNews = async () => {
    const response = await fetch(techNews);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainmentNews);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
    displayNews();
}

const fetchQueryNews = async () => {
    if (newsQuery.value == null)
        return;
    const response = await fetch(searchNews + encodeURIComponent(newsQuery.value)+"&apiKey="+apiKey);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else {
        // handelling errors
        console.log(response.status, response.statusText)
    }
    displayNews();
}

// to display news on the DOM

function displayNews() {

    newsdetails.innerHTML = "";
    newsDataArr.forEach(news => {

        let  date = news.publishedAt.split("T");
        
        let  col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card shadow-lg p-3 mb-5 bg-body rounded";

        let  card = document.createElement('div');
        card.className = "p-2";

        let  image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        let  cardBody = document.createElement('div');
        
        let  newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        let  dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let discription = document.createElement('p');
        discription.className="text-muted text";
        discription.innerHTML = news.description;

        let link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}



