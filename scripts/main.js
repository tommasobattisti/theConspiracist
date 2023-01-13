$(document).ready(function(){
    $("nav").removeClass("dark-background")
    $("nav").addClass("nav-transparent-background");
    
    window.onscroll = () => {
    toggleTopButton();
    changeNavBackground();
    }

});


function changeNavBackground() {
    let thresholdHeight = $(window).height()/100*70
    console.log(thresholdHeight)
    if (document.body.scrollTop >= thresholdHeight || document.documentElement.scrollTop >= thresholdHeight) {
        console.log("cambio colore")
        $("nav").removeClass("nav-transparent-background");
        $("nav").addClass("nav-colored-background");
    } else {
        console.log("ri-cambio colore")
        $("nav").removeClass("nav-colored-background");
        $("nav").addClass("nav-transparent-background");
    };

}


function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
    // Da aggiungere dentro l'IF se poi non dovesse funzionare in altre fasi: "document.body.scrollTop > 500 ||"
    if ( document.documentElement.scrollTop > 500) 
        {
            $('#toTopBtn').css("visibility","visible")
        } 
        else 
        {
            $('#toTopBtn').css("visibility","hidden")    
        }
    }

function changeBtnsVisibility() 
{
    if ($('.sub-btn').css("visibility") ==  "hidden")
        {
            $('.sub-btn').css("visibility","visible")
        }
    else
        {
            $('.sub-btn').css("visibility","hidden")
        }
}



