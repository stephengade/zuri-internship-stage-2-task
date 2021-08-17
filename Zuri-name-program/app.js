const mySelf = document.querySelector(".about-me");
const theText = document.querySelector(".about-me p");
let userName = "Anon";
userName = prompt("What is your name?");

const visitorCheck = () => {
    mySelf.style.display = "none";
  if (userName != null) {
    userName = document.getElementById("username").innerHTML = `${userName}`;
    userName = document.getElementById("user").innerHTML = `${userName}`;
  } else if ((userName = " ")) {
    userName = document.getElementById("username").innerHTML = `hmmm`;
  } else {
    userName = document.getElementById("username").innerHTML = `Alien`;
  }
};



function openMyself() {
    if (mySelf.style.display === "none") {
        mySelf.style.display = "block";
        mySelf.innerHTML = "<p>My name is <span>Stephen Gbolagade</span>...</p>";
    } else { 
        mySelf.style.display = "none";
    }
}

function openThankyou() {

    if (mySelf.style.display === "none") {
        mySelf.style.display = "block";
        mySelf.innerHTML = "<p>Okay, thank you ☹️</p>"
    } else {
        mySelf.style.display = "none";
    }
    

}

visitorCheck();





