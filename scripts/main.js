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


    for (let div of $("div")) {
        if(div.css("transform") == true) {
            let rotation = div.css("transform")
            switch (rotation) {
                case "rotate(90deg)":
                    adjustDimestionsAfterRotation(div, 90);
                    break;
                case "rotate(-90deg)":
                    adjustDimestionsAfterRotation(div, -90);
                    break;
            }
        }
    }


});




function adjustDimestionsAfterRotation(div, rotation) {
    let divWidth = $("#"+div.id).width()
    let divHeight = $("#"+div.id).height()
    nw = abs(divWidth * cos(rotation)) + abs(divHeight * sin(rotation))
    nh = abs(divWidth * sin(rotation)) + abs(divHeight * cos(rotation))

    $(".mdTitleCont").css("width", nw)
    $(".mdTitleCont").css("height", nh)
}

function changeNavBackground() {
    let thresholdHeight = $(window).height()/100*70   
    if (document.body.scrollTop >= thresholdHeight || document.documentElement.scrollTop >= thresholdHeight) {
        $("nav").removeClass("nav-transparent-background");
        $("nav").addClass("nav-colored-background");
    } else {
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
		doc.attr("href", "style/incunabula.css");
		sessionStorage.setItem("style", "style/incunabula.css");
 	}

 	if (styleSheet == 1930) {
		doc.attr("href", "style/newTypography.css");
		sessionStorage.setItem("style", "style/newTypography.css")
 	}

     if (styleSheet == 1970) {
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

