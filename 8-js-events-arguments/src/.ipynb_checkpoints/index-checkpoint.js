const el = document.querySelector("h1");

el.addEventListener("click", logStatement)

function logStatement() {
    console.log('this was clicked')
}