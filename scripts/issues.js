$(document).ready(loadDocumentsList);



function loadDocumentsList(){
    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/tommasobattisti/thePPPPconspiracy/main/fileList.json",
        success: function(listObj){
            let parsedJson = JSON.parse(listObj)
            console.log(parsedJson)
            parsedJson.forEach(obj => {
                $("#docs-list").append('<li><a href="#" onclick="loadDoc('+obj.url+')">'+obj.label+'</a></li>');
            });
        },
        error: function(){
            alert("No document to show")
        }
    });
}