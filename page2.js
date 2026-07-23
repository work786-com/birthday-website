/* ===========================
   PAGE 2 JS
=========================== */



// ===== Typewriter Effect =====

const paragraphs=document.querySelectorAll(".letter-text p");

paragraphs.forEach((p,index)=>{

    const text=p.innerText;

    p.innerHTML="";

    setTimeout(()=>{

        let i=0;

        const typing=setInterval(()=>{

            p.innerHTML+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(typing);

            }

        },30);

    },index*2500);

});


// ===== Floating Hearts =====

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-20px";
    heart.style.fontSize=(18+Math.random()*15)+"px";
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

setInterval(createHeart,1800);

