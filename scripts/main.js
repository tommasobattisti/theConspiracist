// It calls the object of the function when the event
window.onscroll = () =>
{
    toggleTopButton();
}

function scrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() 
{
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
