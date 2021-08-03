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

// topBanner animation
window.addEventListener("DOMContentLoaded",()=>{
    topBannerLeft = document.querySelectorAll(".tb_left");
    console.log(topBannerLeft);
    topBannerLeft.forEach(function(item){
        item.classList.add("fade_animation");
    })
})
// about Animation 

window.addEventListener("scroll",()=>{
    about= document.querySelectorAll(".about_animation");
    about.forEach(function(item){
        item.classList.add("fade_animation");
    })
})
// fadeIn Animation for services

const scrollElements = document.querySelectorAll(".card");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("fade_animation");
};

// const hideScrollElement = (element) => {
//     element.classList.remove("fade_animation");
// };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } 
        // else if (elementOutofView(el)) {
        //     hideScrollElement(el)
        // }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// fadeIn Animation for services images

const scrollImages= document.querySelectorAll(".ser_img");

const imagesInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const imagesOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollImages = (element) => {
    element.classList.add("fade_animation");
};

const hideScrollImages = (element) => {
    element.classList.remove("fade_animation");
};

const handleScrollAnimationImages = () => {
    scrollImages.forEach((el) => {
        if (imagesInView(el, 1.25)) {
            displayScrollImages(el);
        } else if (imagesOutofView(el)) {
            hideScrollImages(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimationImages();
});

// fadeIn Animation for Blog cards

const scrollBlogs= document.querySelectorAll(".sg_bl_crd");

const blogsInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const blogsOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollBlogs = (element) => {
    element.classList.add("fade_animation");
};


const handleScrollAnimationBlogs = () => {
    scrollBlogs.forEach((el) => {
        if (blogsInView(el, 1.25)) {
            displayScrollImages(el);
        } 
    })
}

window.addEventListener("scroll", () => {
    

    handleScrollAnimationBlogs();

    // var hiddenCard = document.querySelector("#ser_cards");
    // hiddenCard.style.display = "block";
});

// fadeIn Animation for contacts

const scrollContactInfo= document.querySelectorAll(".sg_info");

const contactInfoInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const ContactInfoOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollContactInfo = (element) => {
    element.classList.add("fade_animation");
};

const handleScrollAnimationContactInfo = () => {
    scrollContactInfo.forEach((el) => {
        if (contactInfoInView(el, 1.25)) {
            displayScrollContactInfo(el);
        } 
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimationContactInfo();
});

// Number Animation

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        var numAnimation = document.getElementById(id),

            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),

            timer = setInterval(() => {
                current += increment;
                numAnimation.textContent = current;
                if (current == end) {
                    clearInterval(timer)
                }
            }, step)
    }

    counter("count1", 0, 350, 5000);
    counter("count2", 0, 99, 6000);
    counter("count3", 0, 870, 5000);
})


// btn color change

// function btnClrCng(){
//     buttonForChangeColor = document.getElementsByClassName("card_btn");
//     console.log(buttonForChangeColor);
//     buttonForChangeColor.forEach((item) =>{
//         item.style.backgroundColor = "red";
//     });
// }



