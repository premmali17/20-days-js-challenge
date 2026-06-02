// const filterbuttons=document.querySelectorAll(".filter-button button");
// const filterablecards=document.querySelectorAll(".gallery.item");
// console.log(filterablecards,filterbuttons);

// const filterbuttons = document.querySelectorAll(".buttons-filter button");
// const filterablecards = document.querySelectorAll(".gallery .item");

// console.log(filterablecards, filterbuttons);


//define fucntion to filter cards
// const filtercards=(e)=>{
//     document.querySelector("btn active").classList.remove(" active");
//     e.target.classList.add("active");
//     console.log(e.target);   
// }


// Get all filter buttons
const filterButtons = document.querySelectorAll(".btn");

// Get all gallery cards
const filterCards = document.querySelectorAll(".gallery .item");


filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        // Get which category the button represents
        const filterValue = button.getAttribute("data-name");

        // Show / Hide Cards
        filterCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-name");

            if (filterValue === "all" || filterValue === cardCategory) {
                card.classList.remove("hide");
                card.classList.add("show");
            } else {
                card.classList.remove("show");
                card.classList.add("hide");
            }
        });

    });
});
