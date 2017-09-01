//search term - "search-term" all ids. 
//number of records "record-number"
//start year and end year "start-year" "end-year"
//4 input fields
//content dump into "top-articles"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  function Test(search){    
    var parameters = {
        "q": search,
        "api-key": "e6fe3543e4414ea8a7e157e3c9282091"
    }
    return parameters;
  }


  $(document).ready(function(){

    $("#submit").on("click", function(event){
        event.preventDefault()
        var searchTerm = $("#search-term").val();
        var parmObj = Test(searchTerm);
        var parameters = $.param(parmObj);
        queryURL += '?' + parameters;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function (response) {
          console.log(response);
        })
    })

})