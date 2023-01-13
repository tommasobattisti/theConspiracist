$(document).ready(function(){
    maintainStyleOnLoad();
    $("nav").removeClass("dark-background")
    $("nav").addClass("nav-transparent-background");
    
    window.onscroll = () => {
    toggleTopButton();
    changeNavBackground();
    }

    $(".btns-grid-container").on('mouseleave', function() {
        // This function is called with the "onmouseleave" trigger, and:
        // 1. It hides the buttons when you move away the mouse
        $('.sub-btn').css("visibility","hidden")           
    });

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

function changeCSS(styleSheet) 
{
	var doc = $('#styleSheet');

    // we set the attribute "href" with the value of the variable "nameOfTheStyle"
    if (styleSheet == 1500) {
		doc.attr("href", "style/main.css");
		sessionStorage.setItem("style", "style/main.css");
 	}

	if (styleSheet == 1910) {
        console.log("Hola")
		doc.attr("href", "style/main.css");
		sessionStorage.setItem("style", "style/swissGridStyle.css");
 	}

 	if (styleSheet == 1950) {
		doc.attr("href", "style/swissGridStyle.css");
		sessionStorage.setItem("style", "style/swissGridStyle.css")
 	}

    if (styleSheet == 2030) {
		doc.attr("href", "style/main.css");
		sessionStorage.setItem("style", "style/main.css")
 	}
}


function maintainStyleOnLoad() 
{
    
    // This function is called when the page is loaded, and:
    // 1. Checks if the localStorage is empty
    // 2. If it is, it sets the default style
    // 3. If it is not, it sets the style saved in the localStorage

	let styleSheet = $("#styleSheet");
    console.log(styleSheet)

	if (sessionStorage.getItem("style")==null) 
    {
        
		styleSheet.attr("href", "style/main.css");
	}
	else 
    {
		let style = sessionStorage.getItem("style");
		styleSheet.attr("href", style);
	}
}

