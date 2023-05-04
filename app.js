let currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    let x;
    let slides = document.getElementsByClassName("imageSlides");
    let dots = document.getElementsByClassName("dot")
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
        slides[currentIndex - 1].style.display = "block";
    }
    for (x = 0; x < dots.length; i++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    slides[currentIndex-1].style.display = "block";
    dots[currentIndex-1].className += " active";
}