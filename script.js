/*=========================================
Happy Birthday Sanober
script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
       Sparkles
    ------------------------------*/

    const sparkleContainer = document.querySelector(".sparkles");

    function createSparkle(){

        const star = document.createElement("span");

        star.className = "star";

        star.innerHTML = "✨";

        star.style.left = Math.random()*100+"vw";

        star.style.top = Math.random()*100+"vh";

        star.style.fontSize = (10+Math.random()*16)+"px";

        star.style.animationDuration = (2+Math.random()*3)+"s";

        sparkleContainer.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },5000);

    }

    setInterval(createSparkle,350);

    /* -----------------------------
       Buttons
    ------------------------------*/

   document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

    /* -----------------------------
       Floating Hearts
    ------------------------------*/

    function randomHeart(){

        const heart=document.createElement("span");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-20px";

        heart.style.fontSize=(16+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="999";

        document.body.appendChild(heart);

        let y=0;

        const move=setInterval(()=>{

            y+=2;

            heart.style.transform=`translateY(-${y}px)`;

            heart.style.opacity=1-(y/700);

            if(y>700){

                clearInterval(move);

                heart.remove();

            }

        },16);

    }

    setInterval(randomHeart,1800);

    /* -----------------------------
       Photo Animation
    ------------------------------*/

    const photo=document.querySelector(".photo-box");

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.05) rotate(2deg)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1) rotate(0deg)";

    });

    /* -----------------------------
       Title Animation
    ------------------------------*/

    const title=document.querySelector("h1");

    let glow=true;

    setInterval(()=>{

        if(glow){

            title.style.textShadow="0 0 30px #ff8ec4";

        }else{

            title.style.textShadow="0 0 10px #ffb5d4";

        }

        glow=!glow;

    },800);

    /* -----------------------------
       Scroll Button
    ------------------------------*/

    const scroll=document.querySelector(".scroll");

    scroll.addEventListener("click",()=>{

        window.scrollTo({

            top:window.innerHeight,

            behavior:"smooth"

        });

    });

});


/*=========================================
Simple Confetti
=========================================*/

function confetti(){

    for(let i=0;i<80;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="8px";

        c.style.height="8px";

        c.style.borderRadius="50%";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-10px";

        c.style.background=`hsl(${Math.random()*360},100%,70%)`;

        c.style.pointerEvents="none";

        c.style.zIndex="9999";

        document.body.appendChild(c);

        let y=0;

        const speed=2+Math.random()*5;

        const rotate=Math.random()*360;

        const fall=setInterval(()=>{

            y+=speed;

            c.style.transform=`translateY(${y}px) rotate(${rotate+y}deg)`;

            if(y>window.innerHeight+50){

                clearInterval(fall);

                c.remove();

            }

        },16);

    }

}

/* Run Confetti After 1.5 Seconds */

setTimeout(confetti,1500);

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.pageYOffset > 100) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}