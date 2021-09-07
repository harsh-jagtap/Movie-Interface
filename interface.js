console.log("Wel-come to Harshree Movie also called as Harshree Development");

let searchPara = new URLSearchParams(window.location.search).get("id");
let url = "https://harsh-jagtap.github.io/Movie-Data/data.json";
let display = document.querySelector("#show")

fetch(url).then(function(resp) {
    return resp.json()
}).then(function(resp) {
    let key = resp.movie[searchPara - 1]
    let movie;

    if (key === undefined) {
        movie = `<div class="error">
                        <div>
                            ERROR : you have just changed link or have been clicked on wrong link try again.
                        </div>
                        <div>
                            <a href="https://harsh-jagtap.github.io/Movie-Home/">
                                <button class="back-button"> Click me for going to last page </button>
                            </a>
                        </div>
                    </div>`

    } else {
        movie = `<div class="heading"> ${key.name} </div>
        <img class="img" src="${key.imageUrl}" alt="Img error" loading="lazy">
        <hr>
        <div class="info">
        <div> Movie Info -</div>
        <div> Name: ${key.name} </div>
        <div> Language: ${key.Language} </div>
        <div> Released: ${key.ReleaseDate} </div>
        <div> Quality: ${key.Quality} </div>
        <div> Size: ${key.size}mb </div>
        </div>
        <div class="desc"> ${key.description} </div>
        <div class="download-box">
        <div>
        Google drive link :
        </div>
        <a href="${key.downloadUrl}" target="_blank">
        <button class="download-btn">Download</button>
        </a>
        </div>`
    }

    display.innerHTML += movie
})