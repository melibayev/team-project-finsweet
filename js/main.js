const homeVideo = document.getElementById("homevideo");
const homeVideoBtn = document.getElementById("homevideoBtn")

homeVideoBtn.addEventListener("click", () => {
        homeVideo.play()
        homeVideoBtn.style.display = "none"
})
homeVideo.addEventListener("click", () => {
    homeVideo.pause()
    homeVideoBtn.style.display = "flex"
})
// Navbar-open / Navbar-close
function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0";
    document.body.classList.toggle("opacity");
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  // BACKTOP function
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}


// Navbar Shrink
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}


// Aos function
AOS.init({
    duration: 1000
});