$(document).ready(function(){
    loadDocumentsList();


    //Show entities in the text
    $('.show-people').click(function() {
        if ($("input.show-people").is(':checked')) {
            $('.person').addClass("person-bkg");
        }else {
            $('.person').removeClass("person-bkg");
        }
    });

    $('.show-places').click(function() {
        if ($("input.show-places").is(':checked')) {
            $('.place').addClass("places-bkg");
        }else {
            $('.place').removeClass("places-bkg");
        }
    });

    $('.show-organizations').click(function() {
        if ($("input.show-organizations").is(':checked')) {
            $('.organization').addClass("organizations-bkg");
        }else {
            $('.organization').removeClass("organizations-bkg");
        }
    });

    $('.show-events').click(function() {
        if ($("input.show-events").is(':checked')) {
            $('.event').addClass("events-bkg");
        }else {
            $('.event').removeClass("events-bkg");
        }
    });



    //Show metadata in tab divs

    $(".info-nav-i").click(function(){
        if ($(".info-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".info-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".info-nav-i").addClass("active-nav-i");
        }
    });

    $(".people-nav-i").click(function(){
        if ($(".people-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".people-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".people-nav-i").addClass("active-nav-i");
        }
    });

    $(".places-nav-i").click(function(){
        if ($(".places-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".places-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".places-nav-i").addClass("active-nav-i");
        }
    });

    $(".orgs-nav-i").click(function(){
        if ($(".orgs-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".orgs-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".orgs-nav-i").addClass("active-nav-i");
        }
    });

    $(".events-nav-i").click(function(){
        if ($(".events-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".events-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".events-nav-i").addClass("active-nav-i");
        }
    });



});




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
                    $(".docs-list-a").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\', \'a\')">'+obj.label+'</a></li>'); // or: '<li class="doc-list-item" onclick="loadDoc('+obj.url+')">'+obj.label+'</li>'
                    $(".docs-list-b").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\', \'b\')">'+obj.label+'</a></li>') 
                });
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}



function loadDoc(file, div) { //RIVEDERE!!!!!!!
    if(div == "a"){
        loadInA(file)
    }else{
        loadInB(file)
    }
}


function loadInA(file){
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

function loadInB(file){
        $.ajax({
            method: 'GET',
            url: file,
            success: function(d) {
                
                $('#comparison-file').html(d)  // this is the div where you want to show the content of the file 
                $('#comparison-title').html($('#comparison-file h1')) // this is the div where you want to show the title of the file 
            },
            error: function() {
                alert('Could not load file '+ file)
            }
        });
}




//Modality change

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







//Add info and metadata to the metadata section
function addInfo() {
	let article = $(".article-section");
	let metaInfo = (".info-tc");
	let title = $(".article-title");
	for (var i=0; i < title.length; i++) {
		var titleLi = document.createElement("li");
		titleLi.setAttribute("id", "title");
		titleLi.innerText = title[i].innerHTML;
		ul.appendChild(titleLi);
		article.removeChild(title[i]);
	}

	var author = article.getElementsByClassName("author");
	for (var i=0; i < author.length; i++) {
		var authorLi = document.createElement("li");
		authorLi.innerHTML = author[i].innerHTML;
		ul.appendChild(authorLi);
	}
	var citeAs = article.getElementsByClassName("citeAs");
	for (var i=0; i < citeAs.length; i++) {
		var citeAsLi = document.createElement("li");
		citeAsLi.innerHTML = citeAs[i].innerHTML;
		ul.appendChild(citeAsLi);
	}
	var date = article.getElementsByClassName("date");
	for (var i=0; i < date.length; i++) {
		var dateLi = document.createElement("li");
		dateLi.innerHTML = date[i].innerHTML;
		ul.appendChild(dateLi);
	}

	var source = article.getElementsByClassName("originalSource");
	for (var i=0; i < source.length; i++) {
		var sourceLi = document.createElement("li");
		sourceLi.innerHTML = source[i].innerHTML;
		ul.appendChild(sourceLi);
	}
}

function addMetadata() {
	metadataLists("people", "person");
	metadataLists("organizations", "organization");
	metadataLists("places", "place");
	metadataLists("references", "reference");
	metadataLists("events", "event");
}

function metadataLists(type, occurrence) {
	var div = document.getElementById(type);
	var ul = div.getElementsByTagName("ul")[0];
	ul.innerHTML = "";
	var allOccurrences = document.getElementsByClassName(occurrence);

	for (var i = 0; i < allOccurrences.length; i++) {
		var li = document.createElement("li");
		var link = document.createElement("a");
		link.setAttribute("href", "#"+type+"-"+i.toString());
		link.innerHTML = allOccurrences[i].innerHTML;
		li.appendChild(link);
		allOccurrences[i].setAttribute("id", type+"-"+i.toString());
		ul.appendChild(li);
	}
}







