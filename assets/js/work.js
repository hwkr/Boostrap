var options = {
    valueNames: ['card-title', 'card-description', 'card-date', 'card-meta']
};

var pubsList = new List('work', options);

var filterError = $("#filter-error");
var currentFilter = $("#current-filter");
var searchBox = $("input.search");


pubsList.on("searchComplete",function(){
    if (pubsList.visibleItems.length == 0){
        filterError.removeClass("hidden");
        currentFilter.text(searchBox.val());
    }
    else
    {
        filterError.addClass("hidden")
    }
});
