var menu = document.querySelector(".menu_list");
var ham = document.querySelector(".ham_btn");
var xIcon = document.querySelector(".x_icon");
var menuIcon = document.querySelector(".ham_icon");

ham.addEventListener("click", toggleMenu);

menu.classList.contains("show_res_menu");

function toggleMenu() {

    if (menu.classList.contains("show_res_menu")) {
        menu.classList.remove("show_res_menu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show_res_menu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll(".nav_tab_res");
menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
})

// fadeIn Animation

function service_animation() {

    // var visibleCards = document.getElementById("ser_cards");
    // console.log(visibleCards);
    // visibleCards.style.display = "block";

    var card = document.querySelectorAll(".card");
    // card.style.display = "block";

    

    // card.forEach(function(x){
    //     x.classList.add("fade_animation")
    // })

    for (var i = 0; i < card.length; i++) {
        card[i].classList.add("fade_animation");
    }

}








// // practice
// const taskOne = (callback) => {
//     console.log("task 1")
//     callback()
// }

// const taskTwo = (callback) => {
//     setTimeout(()=>{
//         console.log("dataLoading inside settimeout task 2")
//         callback();
//     }, 2000);

//     // console.log("task2")
// }

// const taskThree = () => {
//     console.log("task3")
// }
// const taskFour = () => {
//     console.log("task4")
// }

// // function sqr(x) {
// //     console.log(`squre of ${x}: ${x*x}`);
// // }
// // sqr(9);

// // function higherOrderFunction(num, callback){
// //     callback(num);
// // }

// // higherOrderFunction( 6, sqr);

// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree();
//     });
// })

// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("beshi valo");
//     }else{
//         reject("bodmaish kothakar")
//     }

// })

// promise1.then(res=>{
//     console.log(res);
// });
// console.log("end")
