// function early_or_late(name){
//     let is_early = name[0] == ('a' || 'b')
//     debugger;
//     if (is_early){
//         return `${name} is early`
//     }
//     else {
//         return `${name} is late`
//     }
// }

function early_or_late(name){
    is_late = name[0] >= 'l'
    
    if (is_late){
        return `${name} is late`
    }
    else {
        return `${name} is early`
    }
}