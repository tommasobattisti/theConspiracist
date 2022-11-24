$(document).ready(loadDocumentsList);


var listItemTpl = `<li><a href='#' onclick='loadDocument($url)'>$label</a></li>`

function loadDocumentsList(){
    $.ajax({
        method: GET,
        url: "fileList.json",
        success: function(d){
            for (var i = 0; i<d.length; i++){
                $("#docs-list").append(listItemTpl.tpl({url:d[i].url, label:d[i].label}))
            }
        },
        error: function(){
            alert("No document to show")
        }
    });
}