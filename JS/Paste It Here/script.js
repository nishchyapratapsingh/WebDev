document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.querySelector(".addButton");
    const notesContainer = document.querySelector(".pasteCards");
  
    addNoteBtn.addEventListener("click", () => {
      const noteCard = document.createElement("div");
      noteCard.className = "note-card";
  
      const timestamp = new Date().toLocaleString();
  
      noteCard.innerHTML = `
          <h3 class="note-title">New Note</h3>
          <p class="note-content">Write something here...</p>
          <div class="note-footer">
            <span class="timestamp">${timestamp}</span>
            <div class="note-actions">
              <button class="edit-note">✏️</button>
              <button class="delete-note">🗑️</button>
            </div>
          </div>
        `;
  
      notesContainer.prepend(noteCard);
  
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
          noteHeading.innerHTML = newTitle;
          noteContent.innerHTML = newContent;
          editButton.innerText = "✏️ Edit";
        } else {
          // Change the content to a textarea for editing
          noteHeading.innerHTML = `<textarea class="edit-textarea">${currentTitle}</textarea>`;
          noteContent.innerHTML = `<textarea class="edit-textarea">${currentContent}</textarea>`;
          editButton.innerText = "💾 Save";
        }
      });
  
      // Delete functionality
      deleteButton.addEventListener("click", () => {
        // Remove the note card 
        noteCard.remove();
      });
    });
  });
  