let string = "";
let memory = 0; // Initialize memory variable as a number
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'M+') {
            memory += parseFloat(string); // Add current value to memory
            string = ""; // Reset string
            document.querySelector('input').value = memory; // Display memory value
        } else if (e.target.innerHTML === 'M-') {
            memory -= parseFloat(string); // Subtract current value from memory
            string = ""; // Reset string
            document.querySelector('input').value = memory; // Display memory value
        } else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});

document.getElementById("downloadButton").addEventListener("click", function() {
    // Get the content of the textarea
    var notes = document.getElementById("note").value;

    // Create a Blob with the notes content
    var blob = new Blob([notes], { type: "text/plain" });

    // Create a link element to trigger the download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "notes.txt";
    
    // Append the link to the document body and trigger the download
    document.body.appendChild(a);
    a.click();

    // Remove the link from the document body
    document.body.removeChild(a);
});

