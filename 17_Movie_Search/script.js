const movieInput =
document.getElementById("movieInput");

const searchBtn =
document.getElementById("searchBtn");

const movieContainer =
document.getElementById("movieContainer");

// Get your API key from:
// https://www.omdbapi.com/

const apiKey = "YOUR_API_KEY";

searchBtn.addEventListener(
    "click",
    searchMovie
);

async function searchMovie(){

    const movieName =
    movieInput.value.trim();

    if(movieName === ""){
        alert("Enter movie name");
        return;
    }

    try{

        const response = await fetch(
            `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
        );

        const data =
        await response.json();

        movieContainer.innerHTML = "";

        if(data.Search){

            data.Search.forEach(movie => {

                const card =
                document.createElement("div");

                card.classList.add("movie-card");

                card.innerHTML = `
                    <img src="${movie.Poster}">
                    
                    <div class="movie-info">
                        <h3>${movie.Title}</h3>
                        <p>Year: ${movie.Year}</p>
                    </div>
                `;

                movieContainer.appendChild(card);

            });

        }else{

            movieContainer.innerHTML =
            "<h2>No Movies Found</h2>";
        }

    }

    catch(error){

        movieContainer.innerHTML =
        "<h2>Error Fetching Data</h2>";
    }

}