/*=========================================
PAGE 4
page4.js
=========================================*/

const openBook = document.getElementById("openBook");
const bookCover = document.querySelector(".book-cover");
const letterPage = document.getElementById("letterPage");
const messageBox = document.getElementById("message");
const againBtn = document.getElementById("readAgain");
let typing = false;

/*=========================
Open Letter
=========================*/

openBook.addEventListener("click", () => {

    bookCover.style.display = "none";

    letterPage.classList.add("showLetter");

    startTyping();

});

/*=========================
Typewriter
=========================*/
function startTyping(){

    messageBox.innerHTML = birthdayMessage;

    againBtn.style.display = "block";

    floatingHearts();

}

/*=========================
Read Again
=========================*/

againBtn.addEventListener("click", () => {
    startTyping();
});

/*=========================
Floating Hearts
=========================*/

function floatingHearts(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="💖";

            heart.style.position="fixed";

            heart.style.left=Math.random()*100+"vw";

            heart.style.bottom="-30px";

            heart.style.fontSize=(18+Math.random()*16)+"px";

            heart.style.pointerEvents="none";

            heart.style.zIndex="9999";

            document.body.appendChild(heart);

            let y=0;

            const fly=setInterval(()=>{

                y+=2;

                heart.style.transform=`translateY(-${y}px)`;

                heart.style.opacity=1-y/350;

                if(y>350){

                    clearInterval(fly);

                    heart.remove();

                }

            },16);

        },i*180);

    }

}

/*=========================
Auto Scroll While Typing
=========================*/

window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
});