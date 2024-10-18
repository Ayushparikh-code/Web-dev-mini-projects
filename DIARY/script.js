document.getElementById('diaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const entryText = document.getElementById('entry').value;
    if (entryText) {
        addEntry(entryText);
        document.getElementById('entry').value = ''; // Clear the textarea
    }
});

function addEntry(text) {
    const entriesContainer = document.getElementById('entries');
    
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';
    
    entryDiv.innerHTML = `
        <p>${text}</p>
        <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    
    entriesContainer.appendChild(entryDiv);
}

function deleteEntry(button) {
    const entryDiv = button.parentElement;
    entryDiv.remove();
}
