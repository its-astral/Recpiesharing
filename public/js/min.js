document.getElementById('bulletTextarea').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default newline behavior
        const cursorPos = this.selectionStart;
        const textBefore = this.value.substring(0, cursorPos);
        const textAfter = this.value.substring(cursorPos);

        // Insert a new line with a bullet point
        this.value = textBefore + '\n• ' + textAfter;

        // Move the cursor to the end of the inserted bullet point
        this.selectionEnd = cursorPos + 3; // '\n• '.length is 3
    }
});

// Initialize with a bullet point
document.getElementById('bulletTextarea').value = '• ';