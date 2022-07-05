
window.onload = init
function init(){}
mustShow = true
// let lorem = document.getElementById("lorem")
function hideElement(){
    // let lorem = document.getElementById("lorem")
    lorem.style.visibility = "hidden"
}

function showElement(){   
    // let lorem = document.getElementById("lorem")
    lorem.style.visibility = "visible"
}

function oneClick(){
   mustShow = !mustShow
//    if(mustShow)
//         mustShow = false
//     else
//         mustShow = true

   mustShow?lorem.style.visibility = "hidden":lorem.style.visibility = "visible" // Condition ternaire
//    if(mustShow)
//         lorem.style.visibility = "hidden"
//     else
//         lorem.style.visibility = "visible"
}


// Equivalent JS en JQuery

// $(document).ready(function(){
//     $('.show').click(function(){
//         $('#lorem').show();
//     })
//     $('.hide').click(function(){
//         $('#lorem').hide();
//     })
// })