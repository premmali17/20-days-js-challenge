const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

showNotes();

addBtn.addEventListener("click", () => {

    let noteText = noteInput.value.trim();

    if(noteText === ""){
        alert("Write something first");
        return;
    }

    notes.push(noteText);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    noteInput.value = "";

    showNotes();
});

function showNotes(){

    notesContainer.innerHTML = "";

    notes.forEach((note,index) => {

        let div = document.createElement("div");

        div.classList.add("note");

        div.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesContainer.appendChild(div);
    });
}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    showNotes();
}