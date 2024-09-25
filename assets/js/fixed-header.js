window.addEventListener("scroll", function() {
    const smallHeader = document.getElementById("fixed-header");
    
    if (window.scrollY > 700) {
        smallHeader.style.display = "block";
        smallHeader.style.position = "fixed";
        smallHeader.style.top = "0"; 
        smallHeader.style.width = "100%";
    } else {
        smallHeader.style.display = "none";
    }
});
