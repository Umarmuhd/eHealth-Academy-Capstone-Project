// Dark mode
const darkBtn = document.querySelector(".slider");

darkBtn.addEventListener("click", () => {
  var wrapper = document.querySelector(".wrapper")
  wrapper.classList.toggle("dark-theme");
});

//Dark Mode for Small screens
const darkmodeBtn = document.querySelector("#darkBtnS")
darkmodeBtn.addEventListener("click", ()=>{
  
  var wrapper = document.querySelector(".wrapper")
  wrapper.classList.toggle("dark-theme");

  if (document.querySelector(".moon").classList.contains("hide")){
    document.querySelector(".moon").classList.remove("hide")
    document.querySelector(".sun").classList.add("hide")
  }
  else if(document.querySelector(".sun").classList.contains("hide")){
    document.querySelector(".sun").classList.remove("hide")
    document.querySelector(".moon").classList.add("hide")
  }
  
  

 
})



//Scroll to Top

var scrollToTop = document.getElementById("go-top");
window.onscroll = () => {
    scrollFunction()
};

let scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}