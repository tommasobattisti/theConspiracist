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
                    $("#docs-list").append('<li><a href="#" onclick="loadDoc('+obj.url+')">'+obj.label+'</a></li>'); // or: '<li class="doc-list-item" onclick="loadDoc('+obj.url+')">'+obj.label+'</li>' 
                });
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}

function loadDoc(file) {
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            $('#file').html(d)
            $('#title').html($('#file h1'))
        },
        error: function() {
            alert('Could not load file '+ file)
        }
    });
}