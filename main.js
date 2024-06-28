// Main JS File
showPage('front-page')

function showPage(page_id) {
    // hide all divs
    document.querySelectorAll('div').forEach(div => div.style.display = 'None')
    // show selected div only
    document.getElementById(page_id).style.display = 'block'
}