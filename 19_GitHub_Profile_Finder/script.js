const username =
document.getElementById("username");

const profile =
document.getElementById("profile");

document
.getElementById("searchBtn")
.addEventListener("click", getProfile);

async function getProfile(){

    const user =
    username.value.trim();

    if(user === ""){
        alert("Enter username");
        return;
    }

    try{

        const response = await fetch(
            `https://api.github.com/users/${user}`
        );

        const data =
        await response.json();

        if(data.message === "Not Found"){

            profile.innerHTML =
            "<h2>User Not Found</h2>";

            return;
        }

        profile.innerHTML = `
        
        <div class="profile-card">

            <img src="${data.avatar_url}">

            <h2>${data.name || data.login}</h2>

            <p>${data.bio || "No Bio Available"}</p>

            <div class="stats">

                <div>
                    <h3>${data.followers}</h3>
                    <p>Followers</p>
                </div>

                <div>
                    <h3>${data.following}</h3>
                    <p>Following</p>
                </div>

                <div>
                    <h3>${data.public_repos}</h3>
                    <p>Repos</p>
                </div>

            </div>

        </div>
        `;

    }

    catch(error){

        profile.innerHTML =
        "<h2>Something went wrong</h2>";
    }

}