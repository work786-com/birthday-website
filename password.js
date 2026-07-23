/*=========================================
PASSWORD PAGE
password.js
=========================================*/

// ========= CHANGE YOUR PASSWORD HERE =========
const correctPassword = "2510";
// Example:
// const correctPassword = "HappyBirthday2026";
// ============================================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const unlockBtn = document.getElementById("unlockBtn");
const errorText = document.getElementById("errorText");
const loadingBox = document.getElementById("loadingBox");
const glassCard = document.querySelector(".glass-card");

/*=========================
Show / Hide Password
=========================*/

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";
        togglePassword.innerHTML = "🙈";

    }else{

        passwordInput.type = "password";
        togglePassword.innerHTML = "👁️";

    }

});

/*=========================
Unlock Button
=========================*/

unlockBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

/*=========================
Password Check
=========================*/

function checkPassword(){

    const userPassword = passwordInput.value.trim();

    if(userPassword === correctPassword){

        successAnimation();

    }else{

        wrongPassword();

    }

}

/*=========================
Wrong Password
=========================*/

function wrongPassword(){

    errorText.innerHTML = "❌ Wrong Password";

    glassCard.classList.add("shake");

    if(navigator.vibrate){

        navigator.vibrate(250);

    }

    setTimeout(()=>{

        glassCard.classList.remove("shake");

    },500);

}

/*=========================
Correct Password
=========================*/

function successAnimation(){

    errorText.innerHTML = "💖 Password Correct";

    unlockBtn.style.display = "none";

    loadingBox.style.display = "block";

    createHearts();

    setTimeout(()=>{

        window.location.href = "home.html";

    },1800);

}

/*=========================
Heart Burst
=========================*/

function createHearts(){

    for(let i=0;i<35;i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (18 + Math.random()*18) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const x = (Math.random()-0.5)*500;
        const y = (Math.random()-0.5)*500;

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