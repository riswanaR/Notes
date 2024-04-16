let notes = [];

function addNote() {
  const noteTitleInput = document.getElementById('noteTitle');
  const noteInput = document.getElementById('noteInput');
  const noteTitle = noteTitleInput.value.trim();
  const noteText = noteInput.value.trim();
  
  if (noteTitle !== '' && noteText !== '') {
    const note = { title: noteTitle, text: noteText };
    notes.push(note);
    displayNotes();
    noteTitleInput.value = '';
    noteInput.value = '';
  }
}

function displayNotes() {
  const notesContainer = document.getElementById('notesContainer');
  notesContainer.innerHTML = '';

  notes.forEach((note, index) => {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');

    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;

    const textElement = document.createElement('p');
    textElement.textContent = note.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteNote(index));

    noteContainer.appendChild(titleElement);
    noteContainer.appendChild(textElement);
    noteContainer.appendChild(deleteButton);
    
    notesContainer.appendChild(noteContainer);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}

displayNotes();
