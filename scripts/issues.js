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
                    $("#docs-list").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\')">'+obj.label+'</a></li>'); // or: '<li class="doc-list-item" onclick="loadDoc('+obj.url+')">'+obj.label+'</li>' 
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

function changeToSingleMode() {
    $('.comparison-mode-btn').removeClass('active-mode');
    $(".single-mode-btn").addClass('active-mode');
}

function changeToComparisonMode() {
    $('.single-mode-btn').removeClass('active-mode');
    $(".comparison-mode-btn").addClass('active-mode');
    $(".metadata-container").css({"visibility": "hidden", "width": "0"});
    $(".article-comparison-section").css("width", "50%");
    $(".article-section").css("width", "50%");
    $(".modal-btn-container").css({"visibility": "visible", "width": "100%"});
    $(".modal-btn").css({"width": "100%", "aspect-ratio": "1/1", "display": "flex", "justify-content": "center", "align-content": "center", "align-items": "center", "align-self": "right", "border-radius": "50%", "border": "none", "color": "black", "box-shadow": "0px 8px 15px rgba(0, 0, 0, 0.4)"});
}


