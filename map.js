


let work=document.querySelectorAll(".row img")
let li=document.querySelectorAll(".li")
li.forEach(e => {
    e.addEventListener("click",()=>{
        
        work.forEach(im=>{
            im.style.display="none" 
        })
        let yu=document.querySelectorAll(e.dataset.set)
        
        yu.forEach(kl=>{
console.log(kl)
kl.style.display="block"
       })


   }) 
});


work.forEach(img=>{
    img.addEventListener("click",()=>{
        img.classList.toggle("active")
    })
})


let deg=document.querySelector(".skills")
let span=document.querySelectorAll(".span")
let pro=document.querySelectorAll(".progress span")

window.onscroll=function () {
}




let kl=document.getElementById("kl")
let rowl=document.querySelector(".now")
window.onscroll=function () {
    if (window.scrollY>=kl.offsetTop-200) {
        if (window.scrollY>=deg.offsetTop-200) {
            console.log("lokli")
        span.forEach(io=>{
        io.style.width=io.dataset.color
        })
        pro.forEach(sp=>{
        sp.style.right="0"
        })
        
        }
rowl.style.position="fixed"

    }
    else{
        rowl.style.position="relative"

    }
}






