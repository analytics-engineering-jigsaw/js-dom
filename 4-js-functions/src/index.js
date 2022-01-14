function greeting(){
    return 'hello world'
}



function earlyOrLate(name) {
    let earlyLetters = ['a', 'b', 'c']
    if (earlyLetters.includes(name[0])) {
        return `${name} is early`
    }
    else {
        return `${name} is late`

    }
}

// 'sam is late'
// 'fred is early'

let musicians = ['prince', 'kanye', 'taylor swift']

musicians.forEach((artist) => {
    if (artist == 'kanye') {
        console.log(`${artist} is talented but dramatic`)
    } else {
        console.log(`${artist} is talented`)
    }
})

let nums = [3, 4, 5]

function doubles(nums) {
    let doubledNums = nums.map( (num) => 2*num )
    return doubledNums
}

function getSimpsonNames(){
    simpsonLis = document.querySelectorAll('ul.simpsons li')
    simpsonEls = Array.from(simpsonLis)
    return simpsonEls.map((simpsonEl) => simpsonEl.innerText)
}

function getCharactersOf(show) {
    
    return document.querySelectorAll(`.${show} li`)
}


let title = document.querySelector('h1')

title.addEventListener('mouseenter', logClick)

function logClick(event){
    debugger;
    console.log('updated here')
}