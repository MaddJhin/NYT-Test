//search term - "search-term" all ids. 
//number of records "record-number"
//start year and end year "start-year" "end-year"
//4 input fields
//content dump into "top-articles"
$(document).ready(function(){

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    function Test(search){    
        var object = {
            "q": search,
            "api-key": "e6fe3543e4414ea8a7e157e3c9282091",
        }
        return object;
        console.log("testing");
    }

    Test("car");

    $("#submit").on("click", function(event){
        event.preventDefault()
        var searchTerm = $("#search-term").val();
        var parameters = $.param(searchTerm(searchTerm));

        url += '?' + parameters;
        console.log(url);
    })

})