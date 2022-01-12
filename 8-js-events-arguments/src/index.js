// let simpsonEls = Array.from(document.querySelectorAll(".simpsons li"));

// simpsonEls.forEach(function(element){
//     element.addEventListener('click', logEvent)
// })

// function logEvent(event){
//     console.log(`${event.target.innerText} was clicked`)
// }

let simpsonEls = Array.from(document.querySelectorAll(".simpsons li"));

simpsonEls.forEach(function(element){
    element.addEventListener('click', (event) =>  console.log(`${event.target.innerText} was clicked`))
})