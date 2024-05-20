let main = document.getElementById('main')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let fourth = document.getElementById('fourth')
let fifth = document.getElementById('fifth')

// change the main photo
let changephoto = function(src,color){
    main.src = src
    document.body.style.background = color
}