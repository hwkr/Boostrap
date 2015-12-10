var options = {
    valueNames: ['pub-title', 'pub-desc', 'pub-date']
};

var pubsList = new List('publications', options);

var sortTitle = $("#sort-title");
var sortDate = $("#sort-date");
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

sortTitle.tooltip(
    {
        title: sortTitleTooltip,
        trigger: "hover focus click",
        container: "body",
        placement: "bottom"
    }
);
sortDate.tooltip(
    {
        title: sortDateTooltip,
        trigger: "hover focus click",
        container: "body",
        placement: "bottom"
    }
);

sortTitle.click(function () {
    var order = this.dataset.order;
    pubsList.sort('pub-title', {order: order});
    this.dataset.order = order == "asc" ? "desc" : "asc";
    sortTitle.html("<i class=\"fa fa-sort-alpha-" + this.dataset.order + "\"></i>");
});

sortDate.click(function () {
    var order = this.dataset.order;
    pubsList.sort('pub-date', {order: order});
    this.dataset.order = order == "asc" ? "desc" : "asc";
    sortDate.html("<i class=\"fa fa-sort-numeric-" + this.dataset.order + "\"></i>");
});

function sortTitleTooltip(){
    return ("Sort by Title " + (this.dataset.order == "asc" ? "A-Z" : "Z-A"));
}
function sortDateTooltip(){
    return ("Sort by Year " + (this.dataset.order == "asc" ? "Oldest First" : "Newest First"));
}