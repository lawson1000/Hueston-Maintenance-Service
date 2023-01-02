var loader = document.getElementById("preloader");
        
        window.addEventListener("load", function() {
            loader.style.display="none";
        })
$(document).ready(function(){
    $("#nav-icon").click(function(){
        $("ul").toggleClass("show");
        $("body").toggleClass("hide-overflow");
    }) 
});