// Shows one page
function showPage(page) {
    // first, hide all divs
    document.querySelectorAll('div').forEach(div => {
        div.style.display="None";
    });
    // then, show only the selected div
    document.querySelector(`#${page}`).style.display = "Block";
}

// Wait for page to be loaded:
document.addEventListener('DOMContentLoaded', function() {

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {

        // When a button is clicked, switch to that page
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })
});