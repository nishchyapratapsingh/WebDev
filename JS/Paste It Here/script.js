document.addEventListener("DOMContentLoaded", () => {
  const addNoteBtn = document.querySelector(".addButton");
  const notesContainer = document.querySelector(".pasteCards");

  loadNotesFromLocalStorage();

  addNoteBtn.addEventListener("click", () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "Write something here...",
      timestamp: new Date().toLocaleString(),
    };
    addNoteToDOM(newNote);
    savePaste(newNote);
  });

  function addNoteToDOM(note, index = null) {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";
    noteCard.id = note.id;

    noteCard.innerHTML = `
          <h3 class="note-title">${note.title}</h3>
          <p class="note-content">${note.content}</p>
          <div class="note-footer">
            <span class="timestamp">${note.timestamp}</span>
            <div class="note-actions">
              <button class="edit-note">✏️</button>
              <button class="delete-note">🗑️</button>
            </div>
          </div>
        `;

    notesContainer.prepend(noteCard);

    const pasteListCard = document.createElement("div");
    pasteListCard.className = "pasteListSidebar";

    pasteListCard.innerHTML = `<h4>${
      document.querySelector(".note-title").innerText
    }</h4>`;
    document.querySelector(".pasteList").prepend(pasteListCard);

    const editButton = noteCard.querySelector(".edit-note");
    const deleteButton = noteCard.querySelector(".delete-note");

    // Edit functionality
    editButton.addEventListener("click", () => {
      const noteHeading = noteCard.querySelector(".note-title");
      const noteContent = noteCard.querySelector(".note-content");
      const currentContent = noteContent.innerText;
      const currentTitle = noteHeading.innerText;

      if (noteContent.querySelector("textarea")) {
        const newContent = noteContent.querySelector("textarea").value;
        const newTitle = noteHeading.querySelector("textarea").value;
        pasteListCard.innerHTML = `<h4>${newTitle}</h4>`;
        noteHeading.innerHTML = newTitle;
        noteContent.innerHTML = newContent;
        noteCard.querySelector(
          ".timestamp"
        ).innerHTML = `${new Date().toLocaleString()}`;
        updateNotesInLocalStorage();
        editButton.innerText = "✏️ Edit";
      } else {
        // Change the content to a textarea for editing
        noteHeading.innerHTML = `<textarea maxlength="30" class="edit-textarea">${currentTitle}</textarea>`;
        noteContent.innerHTML = `<textarea class="edit-textarea">${currentContent}</textarea>`;
        editButton.innerText = "💾 Save";
      }
    });

    // Delete functionality
    deleteButton.addEventListener("click", () => {
      noteCard.remove();
      pasteListCard.remove();
      deletePastesFromLocalStorage(noteCard.id);
    });
  }

  function savePaste(note) {
    const pastes = getPastesFromLocalStorage();
    pastes.unshift(note);
    localStorage.setItem("pastes", JSON.stringify(pastes));
  }

  function getPastesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("pastes")) || []; //string to array
  }

  function updateNotesInLocalStorage() {
    const pasteCards = document.querySelectorAll(".note-card");
    const notes = Array.from(pasteCards).map((card) => {
      return {
        id: parseInt(card.id),
        title: card.querySelector(".note-title").innerText,
        content: card.querySelector(".note-content").innerText,
        timestamp: card.querySelector(".timestamp").innerText,
      };
    });
    localStorage.setItem("pastes", JSON.stringify(notes));
  }

  function deletePastesFromLocalStorage(id) {
    let notes = getPastesFromLocalStorage();

    notes = notes.filter((note) => note.id !== parseInt(id));
    localStorage.setItem("pastes", JSON.stringify(notes));
  }

  function loadNotesFromLocalStorage() {
    const notes = getPastesFromLocalStorage();
    notes.sort((b, a) => new Date(b.timestamp) - new Date(a.timestamp));

    notes.forEach((note) => addNoteToDOM(note));
  }
});
