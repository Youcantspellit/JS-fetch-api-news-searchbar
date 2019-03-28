var url = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=16e324e1f1d243ce99d183a5a22a946e';
var time = [];

function mainFunc(u) {
    //var req = new Request(u);
    fetch(u)
        .then(function (response) {
            return (response.json());
        })
        .then(data => {
            function show() {
                console.log(data.articles)

                data.articles.sort(function (a, b) { return b.publishedAt < a.publishedAt ? 1 : -1 });
                //console.log()
                console.log(data.articles)

                for (let i = 0; i < data.articles.length; i++) {
                    let content = document.getElementById("content")
                    let figure = document.createElement("figure")
                    let img = document.createElement("img")
                    let figcaption = document.createElement("figcaption")
                    let heading = document.createElement("h3")
                    let avP = document.createElement("p")
                    let a = document.createElement("a")

                    img.src = data.articles[i].urlToImage;
                    figure.appendChild(img);
                    heading.textContent = data.articles[i].title + data.articles[i].publishedAt;
                    figcaption.appendChild(heading)

                    avP.textContent = data.articles[i].content
                    figcaption.appendChild(avP)
                    a.textContent = "Read more"
                    a.href = data.articles[i].url;
                    figcaption.appendChild(a)
                    figure.appendChild(figcaption)
                    content.appendChild(figure)



                    console.log(data.articles[i].publishedAt)
                    time.push(data.articles[i].publishedAt)

                } //console.log(time)

                /* time.sort(function (a, b) { return b.publishedAt - a.publishedAt });
                console.log(time) */
            }
            show()
        }
        )
}
//mainFunc(url)
let input = document.getElementById("input")
let searchBtn = document.getElementById("inputBtn");
searchBtn.addEventListener("click", function () {
    let result = document.getElementById("input").value
    //console.log(result)
    url = `https://newsapi.org/v2/everything?q=${result}&apiKey=16e324e1f1d243ce99d183a5a22a946e`;
    //console.log(url)
    document.getElementById("content").innerHTML = "";
    mainFunc(url)

});