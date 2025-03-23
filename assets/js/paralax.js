document.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    document.getElementById("layer1").style.transform = `translateY(${scrollPos * 0.2}px)`;
    document.getElementById("layer2").style.transform = `translateY(${scrollPos * 0.4}px)`;
    document.getElementById("layer3").style.transform = `translateY(${scrollPos * 0.6}px)`;
});