$(document).ready(function(){

    loadDocumentsList(); 
    changeToSingleMode(); 


    $(".entity-string").val("");            //clear the entity name input
    $(".entity-string-b").val("");          //clear the entity name input
    $(".entity-type-selection").val("");    //clear the entity type selection
    $(".entity-type-selection-b").val("");  //clear the entity type selection
    $(".show-a").prop("checked", false);    //uncheck the show entities checkbox
    $(".show-b").prop("checked", false);    //uncheck the show entities checkbox
    $(".show-x").prop("checked", false);    //uncheck the show entities checkbox
    
    


    $(".show-x").click(function(){       
        showEntities("-x");
    })
    $(".show-a").click(function(){       //if the checkbox is clicked, show the entities
        showEntities("-a");
    })
    $(".show-b").click(function(){       
        showEntities("-b");
    })


    
    //Show metadata in tab divs
    $(".info-nav-i").click(function(){                      
        if ($(".info-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {                                            //if the info tab is not active already 
            $(".tab-content").removeClass("active-tc");     //remove the active class from all tab content divs
            $(".info-tc").addClass("active-tc");            //add the active class to the info tab content div
            $(".nav-i").removeClass("active-nav-i");        //remove the active class from all nav items
            $(".info-nav-i").addClass("active-nav-i");      //add the active class to the info nav item 
        }                                             //the active class is used to show the tab content div and highlight the nav item (all assigned in css)
    });

    $(".info-nav-i-b").click(function(){
        if ($(".info-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".info-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".info-nav-i-b").addClass("active-nav-i");
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

    $(".people-nav-i-b").click(function(){
        if ($(".people-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".people-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".people-nav-i-b").addClass("active-nav-i");
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

    $(".places-nav-i-b").click(function(){
        if ($(".places-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".places-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".places-nav-i-b").addClass("active-nav-i");
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

    $(".orgs-nav-i-b").click(function(){
        if ($(".orgs-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".orgs-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".orgs-nav-i-b").addClass("active-nav-i");
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

    $(".events-nav-i-b").click(function(){
        if ($(".events-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".events-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".events-nav-i-b").addClass("active-nav-i");
        }
    });


    $(".concepts-nav-i").click(function(){
        if ($(".concepts-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".concepts-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".concepts-nav-i").addClass("active-nav-i");
        }
    });

    $(".concepts-nav-i-b").click(function(){
        if ($(".concepts-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".concepts-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".concepts-nav-i-b").addClass("active-nav-i");
        }
    });


    $(".keywords-nav-i").click(function(){
        if ($(".keywords-nav-i").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content").removeClass("active-tc");
            $(".keywords-tc").addClass("active-tc");
            $(".nav-i").removeClass("active-nav-i");
            $(".keywords-nav-i").addClass("active-nav-i");
        }
    });

    $(".keywords-nav-i-b").click(function(){
        if ($(".keywords-nav-i-b").hasClass("active-nav-i")) {
            console.log("already active")
        } else {
            $(".tab-content-b").removeClass("active-tc");
            $(".keywords-tc-b").addClass("active-tc");
            $(".nav-i-b").removeClass("active-nav-i");
            $(".keywords-nav-i-b").addClass("active-nav-i");
        }
    });




    //Entity creation with local storage 
    $(".entity-creation-form").submit(function(e){ 
        e.preventDefault();    //prevent the form from submitting and refreshing the page
        createEntity("ax");
    });

    $(".entity-creation-form-b").submit(function(e){ 
        e.preventDefault();    //prevent the form from submitting and refreshing the page
        createEntity("b");
    });
       

});


function goToFootnote(target){
    let footnote = $("#note"+target)
    $('html, body').animate({ scrollTop: footnote.offset().top - (window.innerHeight / 2) + footnote.height() / 2 }, 200);
}







function createEntity(form){
    if (form == "ax"){          
        var container = ".article-container"
        var inputs = $(".entity-string")
        var selections = $(".entity-type-selection option:selected")
    } else {
        var container = ".article-comparison-container"
        var input = $(".entity-string-b")
        var selection = $(".entity-type-selection-b option:selected")
    }

    if (inputs) {
        if (inputs[0].value == ""){               //check if the entity name is empty
            var inputEntityName = inputs[1].value
        } else {
            var inputEntityName = inputs[0].value
        }
        if (selections[0].value == ""){
            var inputSelection = selections[1].value
        } else {
            var inputSelection = selections[0].value
        }
    } else {
        var inputEntityName = input.val()
        var inputSelection = selection.val()
    }


    if (inputEntityName == ""){               //check if the entity name is empty
        alert("Please insert a name for the entity")    //if it is empty, alert the user to insert a name
        
    } else if (inputSelection == "") {   //check if the entity type is empty
        alert("Please select a type for the entity")    //if it is empty, alert the user to select a type
    
    } else if ($(""+container+" .article-p:contains('"+inputEntityName+"')").length == 0) {   //check if the entity is present in the article
        console.log(inputEntityName)
        alert("The entity name you inserted is not present in the article")
    
    } else {
        var key = String($(""+container+" .article-title").attr("data-label").toLowerCase());    //get the data-label of the article title and convert it to lowercase
        
        if (localStorage.getItem(key) === null) {                           //check if the key for that article is already present in the local storage
            let entitiesArr = [];
            localStorage.setItem(key, JSON.stringify(entitiesArr));       //if it is not present, create a new key with an empty array as value
        }
        
        let entitiesArray = JSON.parse(localStorage.getItem(key));          //get the value of the key and parse it to an array
        let entityName = inputEntityName;                      //get the entity name from the input field
        let entityType = inputSelection;
                       //get the entity type from the input field
        
                                       
        const entity = entitiesArray.find((en) => {                             //check if the entity already exists in the array
            if ((en.name === entityName) && (en.type === entityType)) {
                return true;
            } else {
                return false;
            }
        })

        if (entity) {                                 //if the entity already exists, alert the user
            alert("This entity already exists")
        } else {                                      //if the entity does not exist, create a new entity object and push it to the array
            let count = 0;
            // Use a regular expression to find all occurrences of the word "beautiful" within the article paragraph, ignoring the ones inside other <span> elements
            const regex = new RegExp('(?!<span[^>]*>)\\b('+entityName+')[(ing)(s)(n)(ed)(d)]?\\b(?![^<]*<\/span>)', 'gi') //(IN THIS WAY WE CANNOT ASSIGN A NEW TYPE TO AN ALREADY CLASSIFIED ENTITY)
            for (const par of $(""+container+" .article-p")){
                if (par.innerHTML.match(regex) !== null){
                  count += par.innerHTML.match(regex).length
                }
            }
                
            if (count == 0){             // If there are no matches, return an alert 
                alert("The entity name you inserted has been already marked as a different entity type")
            
            } else {
                if (entitiesArray.length === 0) {
                    var id = 1;
                } else {
                    var id = entitiesArray[entitiesArray.length - 1]['end-id'] + 1;
                }
                const entityObj = {                                            //create the entity object
                    "name": entityName,
                    "type": entityType,
                    "start-id": id,
                    "end-id": id + count - 1
                }

                var id = entityObj["start-id"] -1;

                for (const par of $(""+container+" .article-p")) {
                    let matches = par.innerHTML.match(regex); // Use a regular expression to find all occurrences of the word "beautiful" within the article paragraph, ignoring the ones inside other <span> elements
                    if (!matches) continue; // If there are no matches, return
                    // Replace each match with a <span> element
                    par.innerHTML = par.innerHTML.replace(regex, function(match) {
                        id++;
                        return '<span id="my-entity-'+form+'-'+String(id)+'" class="mention '+entityObj.type+'">'+match+'</span>';
                    });
                }
                entitiesArray.push(entityObj);
                localStorage.setItem(key, JSON.stringify(entitiesArray));    //push the entity object to the array

                if ($(".article-container .article-title").attr("data-label") == $(".article-comparison-container .article-title").attr("data-label")){
                    addEntitiesFromLocalStorage("b", String($(".article-container .article-title").attr("data-label").toLowerCase()));
                    addEntitiesFromLocalStorage("ax", String($(".article-container .article-title").attr("data-label").toLowerCase()));
                    addMetadata("-x");
                    showEntities("-x");
                    addMetadata("-b");
                    showEntities("-b");
                } else {
                    if (form == "ax"){
                        addMetadata("-x");
                        showEntities("-x");
                        $(".entity-string").val("");    //empty the input field
                        $(".entity-type-selection").val("");   //clear the entity type selection
                    } else {
                        addMetadata("-b");
                        showEntities("-b");
                        $(".entity-string-b").val("");    //empty the input field
                        $(".entity-type-selection-b").val("");   //clear the entity type selection
                    }
                }
                
            };  
        };                                       
    }       
}






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
                parsedJson.forEach(obj => {
                    $(".docs-list-a").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\', \''+obj.label+'\', \'a\'); return false">'+obj.label+'</a></li>'); // or: '<li class="doc-list-item" onclick="loadDoc('+obj.url+')">'+obj.label+'</li>'
                    $(".docs-list-b").append('<li><a href="#" onclick="loadDoc(\''+obj.url+'\', \''+obj.label+'\', \'b\'); return false">'+obj.label+'</a></li>')
                    // The 'return false' is needed to prevent the default action of the link (which is to go to the url) and to prevent the page from reloading when the link is clicked (which is the default action of the link)
                });
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}



function loadDoc(file, label, div) { //RIVEDERE!!!!!!!
    if(div == "a"){
        loadInA(file, label)
        
    }else{
        loadInB(file, label)
    }
}



function loadInA(file, label){
    $(".entity-string").val(""); //reset the input field

    if (label.toLowerCase() == String($(".article-container .article-title").attr("data-label")).toLowerCase()) {
        console.log("Already loaded")
    } else {
        $.ajax({
            method: 'GET',
            url: file,
            success: function(d) {
                let article = $('.article-container').html(d)
                $('.article-container').replaceWith(article)
                createIds("ax");
                addInfo("ax");
                addMetadata("ax");
                addEntitiesFromLocalStorage("ax", label);
                addMetadata("ax");
                
            },
            error: function() {
                alert('Could not load file '+ file)
            }
        });
        $(".show-x").prop( "checked", false );
        $(".show-a").prop( "checked", false );
          
    }; 
}

function loadInB(file, label){
    if (label.toLowerCase() == String($(".article-comparison-container .article-title").attr("data-label")).toLowerCase()) {
        console.log("Already loaded")
    } else {
        $.ajax({
            method: 'GET',
            url: file,
            success: function(d) {
                let article = $('.article-comparison-container').html(d)
                $('.article-comparison-container').replaceWith(article);
                createIds("b");
                addInfo("b");
                addMetadata("b");
                addEntitiesFromLocalStorage("b", label);
                addMetadata("b");
            },
            error: function() {
                alert('Could not load file '+ file)
            }
        });
        $(".show-b").prop( "checked", false );
    }
}


//Show entities in the text
function showEntities(r){
    if ((r == "-a") || (r == "-x")){
        var toCheck = "-ax";
        var cont = ".article-container";
    } else {
        var toCheck = "-b";
        var cont = ".article-comparison-container";
    }

    if ($(".show-people"+r+"").is(':checked')) {
        $(".show-people"+toCheck+"").prop("checked", true) //set the checkbox to checked so that also the checkbox in the modal will be checked
        $(""+cont+" .person").addClass("person-bkg");
    } else {
        $(".show-people"+toCheck+"").prop( "checked", false) //set the checkbox to unchecked so that also the checkbox in the modal will be unchecked
        $(""+cont+" .person").removeClass("person-bkg");
    };

    if ($(".show-places"+r+"").is(':checked')) {
        $(".show-places"+toCheck+"").prop("checked", true)
        $(""+cont+" .place").addClass("places-bkg");
    } else {
        $(".show-places"+toCheck+"").prop("checked", false)
        $(""+cont+" .place").removeClass("places-bkg");
    };

    if ($(".show-organizations"+r+"").is(':checked')) {
        $(".show-organizations"+toCheck+"").prop("checked", true)
        $(""+cont+" .organization").addClass("organizations-bkg");
    } else {
        $(".show-organizations"+toCheck+"").prop("checked", false)
        $(""+cont+" .organization").removeClass("organizations-bkg");
    };

    if ($(".show-events"+r+"").is(':checked')) {
        $(".show-events"+toCheck+"").prop("checked", true)
        $(""+cont+" .event").addClass("events-bkg");
    } else {
        $(".show-events"+toCheck+"").prop("checked", false)
        $(""+cont+" .event").removeClass("events-bkg");
    };

    if ($(".show-concepts"+r+"").is(':checked')) {
        $(".show-concepts"+toCheck+"").prop("checked", true)
        $(""+cont+" .concept").addClass("concepts-bkg");
    } else {
        $(".show-concepts"+toCheck+"").prop("checked", false)
        $(""+cont+" .concept").removeClass("concepts-bkg");
    };

    if ($(".show-keywords"+r+"").is(':checked')) {
        $(".show-keywords"+toCheck+"").prop("checked", true)
        $(""+cont+" .keyword").addClass("keywords-bkg");
    } else {
        $(".show-keywords"+toCheck+"").prop("checked", false)
        $(""+cont+" .keyword").removeClass("keywords-bkg");
    };

}







function addEntitiesFromLocalStorage(modal, key){
    if (modal == "ax"){
        var paragraphs = $(".article-container .article-p");
    } else {
        var paragraphs = $(".article-comparison-container .article-p");
    }
    for (entityObj of JSON.parse(localStorage.getItem(key.toLowerCase()))){
        var id = entityObj["start-id"]
        for (par of paragraphs) {
            let regex = new RegExp('(?!<span[^>]*>)\\b('+entityObj.name+')[(ing)(s)(ed)(d)]?\\b(?![^<]*<\/span>)', 'gi')
            let matches = par.innerHTML.match(regex); // Use a regular expression to find all occurrences of the word "beautiful" within the article paragraph, ignoring the ones inside other <span> elements
            if (!matches) continue; // If there are no matches, return
            // Replace each match with a <span> element
            par.innerHTML = par.innerHTML.replace(regex, function(match) {
                id++;
                return '<span id="my-entity-'+modal+'-'+String(id)+'" class="mention '+entityObj.type+'">'+match+'</span>';
            });
        }
    }

}




//Modality change


let myMediaQuery = window.matchMedia('(max-width: 1080px)'); //media query to check whether the window is smaller than 1080px

function widthChangeCallback(myMediaQuery) { //callback function to execute when media query is triggered
  if(myMediaQuery.matches) {
    changeMode("single");
   }
}

myMediaQuery.addEventListener('change', widthChangeCallback); //add listener to media query to execute callback function when media query is triggered


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
    $(".metadata-container").css("display", "flex");
    $(".article-comparison-container").css({"display": "none"});
    $(".article-container").css("width", "70%");
    $(".btns-item-9").removeClass("visible").addClass("hidden");
    $(".btns-item-10").removeClass("visible").addClass("hidden");
    $(".double-doc-selector").css({"visibility": "hidden", "height": "0"});
    $(".right-modal-body").css({"display": "none", "visibility": "hidden", "height": "0"});
    $(".modal-dialog").removeClass("width-80");
    $(".modal-dialog").css("max-width", "500px");
}


function changeToComparisonMode() {
    $('.single-mode-btn').removeClass('active-mode');
    $(".comparison-mode-btn").addClass('active-mode');
    $(".metadata-container").css("display", "none");
    $(".article-comparison-container").css({"display": "block", "width": "47.5%"});
    $(".article-container").css("width", "47.5%");
    $(".btns-item-9").removeClass("hidden").addClass("visible");
    $(".btns-item-10").removeClass("hidden").addClass("visible");
    $(".double-doc-selector").css({"visibility": "visible", "height": "auto"});
    $(".right-modal-body").css({"display": "flex", "visibility": "visible", "height": "auto"});
    $(".modal-dialog").addClass("width-80");
    $(".modal-dialog").css("max-width", "none");
}



//Create id for each entity in the paragraphs

function createIds(contString) {
    let idNum = 0;
    let idString = "mention-"+contString+"-";
    if (contString == "ax"){
        var paragraphs = $(".article-container .article-p");
    } else {
        var paragraphs = $(".article-comparison-container .article-p");
    }

    for (let par of paragraphs) {
        let spanRegex = new RegExp('<span[^>]*class="mention[^>]*>', 'gi')
        let matches = par.innerHTML.match(spanRegex);
        if (!matches) continue;
        for (let match of matches) {
            idNum++;
            par.innerHTML = par.innerHTML.replace(match, match.replace(">", 'id="'+idString+idNum+'">'));
        }
    }

}





//Add info and metadata to the metadata container

function addInfo(modal) {
    if (modal == "b"){
        var infoDl = $(".info-dl-b");
    } else {
        var infoDl = $(".info-dl");
    }    
    infoDl.empty();   //empty the dl element before adding new info
    infoDl.append("<dt>Title</dt><dd class='title-dd'>"+$('.article-title').text()+"</dd>"); //add title to the dl element
    infoDl.append("<dt>Author</dt>"); //add author to the dl element
    for (let i = 0; i < $('.author-info').length; i++) {
        infoDl.append("<dd class='author-dd'>"+$('.author-info')[i].innerText+"</dd>");
    };

    infoDl.append("<dt>Publication date</dt><dd class='pub-date-dd'>"+$('.publication-date').text()+"</dd>"); //add publication date to the dl element
}


function addMetadata(modal) {
    if (modal == "b"){
        var ul = "-ul-b";
        var mentions = $(".article-comparison-container .mention")
    } else {
        var ul = "-ul";
        var mentions = $(".article-container .mention")
    }
    let peopleUl = $(".people"+ul+"")
    peopleUl.empty()

    let placesUl = $(".places"+ul+"")
    placesUl.empty()

    let orgsUl = $(".orgs"+ul+"")
    orgsUl.empty()

    let eventsUl = $(".events"+ul+"")
    eventsUl.empty()

    let conceptsUl = $(".concepts"+ul+"")
    conceptsUl.empty()

    let keywordsUl = $(".keywords"+ul+"")
    keywordsUl.empty()

    for (const mention of mentions){
        let entityLink = "<li><a class='entity-link' href='#' data-dismiss='modal' onclick='animateBkg(event, \"#"+mention.id+"\")'>"+mention.innerText+"</a></li>"
        if (mention.classList.contains("person")) {
            peopleUl.append(entityLink)
        } else if (mention.classList.contains("place")) {
            placesUl.append(entityLink)
        } else if (mention.classList.contains("organization")) {
            orgsUl.append(entityLink)
        } else if (mention.classList.contains("event")) {
            eventsUl.append(entityLink)
        } else if (mention.classList.contains("concept")) {
            conceptsUl.append(entityLink)
        } else if (mention.classList.contains("keyword")) {
            keywordsUl.append(entityLink)
        }
        }
    
}


//Animate background of entity link when clicked
function animateBkg(event, id) {
    event.preventDefault(); //prevent the default behaviour of the link (scrolling to the top of the page)
    var element = $(""+id+""); 
	$('html, body').animate({ scrollTop: element.offset().top - (window.innerHeight / 2) + element.height() / 2 }, 200); //scroll to the entity link and center it in the window 

    let counter = 0;
    const maxIterations = 1;
    const highlight = setInterval(function() {                  //set interval to repeat the animation every 900ms
                        $(id).addClass("animation-bkg")         //add the animation class to the entity link
                        setTimeout(function() {                 //remove the animation class after 450ms
                            $(id).removeClass("animation-bkg")  //remove the animation class
                        }, 450);
                        if (counter >= maxIterations) {         //stop the interval after 1 iteration (it will be highleted two times)
                            clearInterval(highlight);
                        }
                        counter++;
                        }, 900);
}


//ANOTHER IMPLEMENTATION OF THE ANIMATION FUNCTION
//function animateBkg(id) {
//    $(id).addClass('animate');
//    setTimeout(function(){
//        $(id).removeClass('animate');
//    },5000);
//}



