$(document).ready(loadDocumentsList);
function loadDocumentsList(){
    $.ajax({
        cache: false,
        method: "GET",
        url: "https://raw.githubusercontent.com/tommasobattisti/thePPPPconspiracy/main/fileList.json",
        success: function(listObj){
            let parsedJson = JSON.parse(listObj)
            if (parsedJson.length == 0){
                alert("No document to show")
            } else {
                console.log(parsedJson)
                parsedJson.forEach(obj => {
                    $(".docs-list").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\')">'+obj.label+'</a></li>'); // or: '<li class="doc-list-item" onclick="loadDoc('+obj.url+')">'+obj.label+'</li>' 
                });
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}

function loadDoc(file) { //RIVEDERE!!!!!!!
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            $('#file').html(d)  // this is the div where you want to show the content of the file 
            $('#title').html($('#file h1')) // this is the div where you want to show the title of the file 
        },
        error: function() {
            alert('Could not load file '+ file)
        }
    });
}




function changeMode(mode) {
    if (mode == 'single' && $(".active-mode").hasClass('comparison-mode-btn')) {
        changeToSingleMode()
    } else if (mode == 'comparison' && $(".active-mode").hasClass('single-mode-btn')) {
        changeToComparisonMode()
    } else {
        console.log("Mode already active")
    }
}


let myMediaQuery = window.matchMedia('(max-width: 1080px)'); //media query to check whether the window is smaller than 1080px

//initial check to see whether the media query is satisfied when the page is loaded but no resizing has occurred
widthChangeCallback(myMediaQuery);

function widthChangeCallback(myMediaQuery) { //callback function to execute when media query is triggered
  if(myMediaQuery.matches) {
    changeMode("single");
   }
}
myMediaQuery.addEventListener('change', widthChangeCallback); //add listener to media query to execute callback function when media query is triggered




function changeToSingleMode() {
    $('.comparison-mode-btn').removeClass('active-mode');
    $(".single-mode-btn").addClass('active-mode');
    $(".metadata-container").css({"visibility": "visible", "width": "28%"});
    $(".article-comparison-section").css({"visibility": "hidden", "width": "0"});
    $(".article-section").css("width", "70%");
    $(".modal-btn-container").css({"visibility": "hidden", "width": "0"});
    $(".double-doc-selector").css({"visibility": "hidden", "height": "0"});
}


function changeToComparisonMode() {
    $('.single-mode-btn').removeClass('active-mode');
    $(".comparison-mode-btn").addClass('active-mode');
    $(".metadata-container").css({"visibility": "hidden", "width": "0"});
    $(".article-comparison-section").css({"visibility": "visible", "width": "50%"});
    $(".article-section").css("width", "50%");
    $(".modal-btn-container").css({"visibility": "visible", "width": "100%"});
    $(".double-doc-selector").css({"visibility": "visible", "height": "auto"});
}


