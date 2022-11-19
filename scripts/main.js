window.onscroll = () => {
    toggleTopButton();
    }
    function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
    function toggleTopButton() {
    if (document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500) {
        document.getElementById('toTopBtn').style.visibility = "visible";
    } else {
        document.getElementById('toTopBtn').style.visibility = "hidden";
    }
    }

function changeBtnsVisibility() {
    if (document.getElementsByClassName('subBtn')[0].style.visibility == "hidden"){
        for (let el of document.querySelectorAll('.subBtn')){
            el.style.visibility = 'visible';
            };
    }else{
        for (let el of document.querySelectorAll('.subBtn')){
            el.style.visibility = 'hidden';
            };
    };
}
