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

$(function() {
    $('.btn-group-fab').on('click', '.btn', function() {
      $('.btn-group-fab').toggleClass('active');
    });
  });

