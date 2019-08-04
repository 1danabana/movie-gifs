$(function(){
    populateButton(searchArray, 'searchButton', '#buttonsArea');
})

var searchArray = ["A", "B", "C"];

function populateButton(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0; i < searchArray.length; i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
        
    }
}
$(document).on('click', '.searchButton', function(){
    var type = $(this).data('type');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=75e52coobNBgUkl0m4wSPjcWsvg7bHZ4limit=12'
    $.ajax({url:queryURL,method:'GET'})
        .done(function(response){
            for(var i= 0; i>response.data.length; i++){
                var searchDiv = $('<div class="search-item">');
                var rating 
            }
        })
})