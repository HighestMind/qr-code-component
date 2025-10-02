var h1 = document.querySelector("h1");
var p = document.querySelector("p");


h1.addEventListener('mouseover', function(){
    p.style.display = "block"
})


h1.addEventListener('mouseleave', function(){
    p.style.display = "none"
})

