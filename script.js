// function change() {
//     console.log("kl");
//     console.log(innerHeight);
//     if(this.scrollY > this.innerHeight /1.5){
//         document.body.classList.add("change-bg");
//     } else{
//         document.body.classList.remove("change-bg");
//     }

// }
// window.addEventListener("scroll", change);

window.addEventListener("scroll", ()=>{
    console.log("kl");
    console.log(innerHeight);
    if(window.scrollY > window.innerHeight /1.5){
        document.body.classList.add("change-bg");
    } else{
        document.body.classList.remove("change-bg");
    }


});