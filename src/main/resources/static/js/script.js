$(".message a").click(function () {
    $("form").animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow")
})

const UserName = document.getElementById("username")
const Email = document.getElementById("email")
const Pass = document.getElementById("password")

const UserNameError = document.getElementById("error1")
const EmailError = document.getElementById("error5")
const PassError = document.getElementById("error6")

const Strength = document.getElementById("strength")
const RegisterForm = document.getElementById("register-form")

const indicator = document.querySelector(".indicator");
const input = document.getElementById("password")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".strength");

let regExpWeak = /[a-zA-Z]+/;
let regExpMedium = /\d+/;
let regExpStrong = /[!@#$%^&*?_~(),-]+/;

function trigger() {
    let no;
    if (input.value !== "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
        if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;
        if (no === 1) {
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");
        }
        if (no === 2) {
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if (no === 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
    }
}

function validateEmail(emailText) {
    const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return re.test(String(emailText).toLowerCase());
}

// function validatePhone(phoneText) {
//     const re = /^[\d\.\-]+$/;
//     return re.test(String(phoneText));
// }

function validateName(nameText) {
    const re = /^[a-zA-Z]*$/;
    return re.test(String(nameText));
}

Pass.addEventListener('change', () => {
    console.log("Yo")
})

RegisterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    UserNameError.innerHTML = ""
    EmailError.innerHTML = ""
    PassError.innerHTML = ""

    if (!validateName(UserName.value)) {
        UserNameError.innerText = "Please enter a valid first name."
    }

    // if (!validateName(LName.value)) {
    //     LNameError.innerText = "Please enter a valid last name."
    // }

    // if (!validatePhone(Phone.value)) {
    //     PhoneError.innerText = "Please enter a valid phone number."
    // }

    if (!validateEmail(Email.value)) {
        EmailError.innerText = "Please enter a valid email."
    }

    if (Pass.value.length < 8) {
        PassError.innerHTML = "Password must be at least 8 digits."
    }
})
