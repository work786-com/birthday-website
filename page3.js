
/*=========================================
PAGE 3 VERSION 2
page3.js
=========================================*/

const openBtn = document.getElementById("openBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surpriseContent");
const wishBtn = document.getElementById("wishBtn");


/*=========================
Open Surprise
=========================*/

function openSurprise(){

    openBtn.disabled=true;

    giftBox.classList.add("shake");

    setTimeout(()=>{

        giftBox.classList.remove("shake");

        giftBox.classList.add("openGift");

    },800);

    setTimeout(()=>{

        document.querySelector(".gift-area").style.display="none";

        openBtn.style.display="none";

        surprise.classList.add("show");
        wishBtn.style.display = "block";
        wishBtn.classList.add("showBtn");

        createHearts();

        createConfetti();

        wishBtn.onclick = function(){

    window.location.href = "page4.html";

};

    },1800);

}

openBtn.addEventListener("click",openSurprise);

giftBox.addEventListener("click",openSurprise);

/*=========================
Heart Explosion
=========================*/

function createHearts(){

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*500;

        const y=(Math.random()-0.5)*500;

        heart.animate([

            {

                transform:"translate(0,0) scale(.5)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) scale(1.5)`,

                opacity:0

            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1800);

    }

}

/*=========================
Confetti
=========================*/

function createConfetti(){

    for(let i=0;i<100;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";

        conf.style.width="10px";

        conf.style.height="10px";

        conf.style.borderRadius="50%";

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.background=`hsl(${Math.random()*360},100%,70%)`;

        conf.style.zIndex="99999";

        document.body.appendChild(conf);

        let y=0;

        const speed=2+Math.random()*6;

        const rotate=Math.random()*360;

        const fall=setInterval(()=>{

            y+=speed;

            conf.style.transform=`translateY(${y}px) rotate(${rotate+y}deg)`;

            if(y>window.innerHeight+30){

                clearInterval(fall);

                conf.remove();

            }

        },16);

    }

}

/*=========================
Floating Hearts
=========================*/

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(18+Math.random()*15)+"px";

    heart.style.opacity=".8";

    heart.style.pointerEvents="none";

    heart.style.zIndex="100";

    document.body.appendChild(heart);

    let up=0;

    const fly=setInterval(()=>{

        up+=2;

        heart.style.transform=`translateY(-${up}px)`;

        heart.style.opacity=1-up/400;

        if(up>420){

            clearInterval(fly);

            heart.remove();

        }

    },16);

},1200);