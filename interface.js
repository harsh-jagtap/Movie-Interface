console.log("Wel-come to Harshree Movie also called as Harshree Development");

let searchPara = new URLSearchParams(window.location.search).get("id");
// let url = "../Movie Data/data.json";
let url = "https://harsh-jagtap.github.io/Movie-Data/data.json";
let display = document.querySelector("#show")

fetch(url).then(function(resp) {
    return resp.json()
}).then(function(resp) {
    let key = resp.movie[searchPara - 1]
    let movie;

    // showing
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
        // sorting download link
        let downloadButton = "";

        if (typeof(key.downloadUrl) === "object") {

            let count = 0;
            for (k in key.downloadUrl) {
                if (key.downloadUrl.hasOwnProperty(k)) count++;

                downloadButton += `Part ${count}
                <a href="${key.downloadUrl[count]}" target="_blank">
                <button class="download-btn"> Download / Watch online </button>
                </a>`
            }



            console.log(key.downloadUrl[1], count);
        } else {
            console.log("bye");

            downloadButton += `<a href="${key.downloadUrl}" target="_blank">
            <button class="download-btn"> Download / Watch online</button>
            </a>`
        }

        // displaying
        movie = `<div class="heading"> ${key.name} </div>
            <img class="img" src="${key.imageUrl}" alt="Img error" loading="lazy">
            <hr>
            <div class="info">
            <p> Movie Info -</p>
            <p> Name: ${key.name} </p>
            <p> Language: ${key.Language} </p>
            <p> Released: ${key.ReleaseDate} </p>
            <p> Quality: ${key.Quality} </p>
            <p> Size: ${key.size}mb </p>
            </div>
            <div class="desc"> ${key.description} </div>
            <div class="download-box">
            <div> Google drive link : </div>
            <div> Can watch online </div>
            <div class="downlodButtonList">
            ${downloadButton}
            </div>
            </div>`
    }

    display.innerHTML += movie
})