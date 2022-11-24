$(document).ready(loadDocumentsList);


var listItemTpl = `<li><a href='#' onclick='loadDocument($url)'>$label</a></li>`

function loadDocumentsList(){
    $.ajax({
        method: GET,
        url: "https://github.com/tommasobattisti/streamlit-example/blob/master/ex.json",
        success: function(d){
            alert("WE");
            for (var i = 0; i<d.length; i++){
                $("#docs-list").append("<li>Bella li</li>");
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}