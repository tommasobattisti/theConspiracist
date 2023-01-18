$(document).ready(function(){


    let previousScrollPosition = 0;

const isScrollingDown = () => {
    let goingDown = false;

    let scrollPosition = window.pageYOffset;

    if (scrollPosition > previousScrollPosition) {
        goingDown = true;
    }

    previousScrollPosition = scrollPosition;

    return goingDown;
};

const handleScroll = () => {
  if (isScrollingDown()) {
    logo.classList.add("scroll-down");
    logo.classList.remove("scroll-up");
  } else {
    logo.classList.add("scroll-up");
    logo.classList.remove("scroll-down");
  }
};

const scrollThrottle = _.throttle(handleScroll, 100);
window.addEventListener("scroll", scrollThrottle);


    $(window).on('wheel', function(e) {
        if ($("#styleSheet").attr("href", "style/main.css")){

            var delta = e.originalEvent.deltaY;
        
            if (delta > 0){
                console.log("udownp")
            } else {
                console.log("up")
            } 
        
            return false;
        }}
    );

    



})

