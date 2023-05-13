const copybtn = document.querySelector(".input-field .fa-solid"),
    input = document.querySelectorAll(".input-field input")[0],
    inputrange = document.querySelectorAll(".input-field input")[1],
    option = document.querySelectorAll(".option input"),
    rangefield = document.querySelector(".details span"),
    indicator = document.querySelector(".input-field .indicator"),
    generate = document.querySelector(".container .generate-btn");








const copypassword = () => {
    copybtn.classList.replace("fa-clipboard", "fa-check")
    navigator.clipboard.writeText(input.value);


    setTimeout(() => {
        copybtn.classList.replace("fa-check", "fa-clipboard")
    }, 3000);
}

const passwordlength = () => {
    rangefield.innerText = inputrange.value;

    if(inputrange.value <= 10) {
        indicator.setAttribute("id", "week");
    }
    else if(inputrange.value <= 20) {
        indicator.setAttribute("id", "medium");
    }
    else {
        indicator.setAttribute("id", "strong");
    }
}
passwordlength();

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symble: "!@#$%^&*(~`_-+\"<>,.:;'|"
}

const generatepassword = () => {
    let staticpassword = "",
        forlength = inputrange.value,
        randompassword = "";
    option.forEach(option => {
        if(option.checked){
            staticpassword += characters[option.id];
        }
    })
    
    for (let i = 0; i < forlength; i++) {
        let rangomchar = staticpassword[Math.floor(Math.random() * staticpassword.length)];
        if(randompassword.includes(rangomchar)){
            i--;
        }else {
            randompassword += rangomchar;
        }
    }

    input.value = randompassword;
}
generatepassword();

inputrange.addEventListener("input", passwordlength);
copybtn.addEventListener("click", copypassword);
generate.addEventListener("click", generatepassword);