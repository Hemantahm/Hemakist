// Login Functionality
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Please enter both username and password.");
    }
});

// Chat Functionality
let activeSemester = "";

function showChat(semester) {
    activeSemester = semester;
    document.getElementById("chat-title").innerText = `Chat for ${semester}`;
    loadChat(semester);
}

function loadChat(semester) {
    const chatMessages = localStorage.getItem(`chat-${semester}`);
    document.getElementById("chat-messages").innerHTML = chatMessages || "";
}

function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const message = chatBox.value;

    if (message) {
        const chatArea = document.getElementById("chat-messages");
        const newMessage = `<p>${message}</p>`;
        chatArea.innerHTML += newMessage;

        localStorage.setItem(`chat-${activeSemester}`, chatArea.innerHTML);
        chatBox.value = ""; // Clear the chat box
    }
}

function uploadNotes() {
    const notesInput = document.getElementById("upload-notes");
    if (notesInput.files.length > 0) {
        alert(`Notes file "${notesInput.files[0].name}" uploaded successfully!`);
    } else {
        alert("Please select a file to upload!");
    }
}
