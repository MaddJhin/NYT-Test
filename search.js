//search term - "search-term" all ids. 
//number of records "record-number"
//start year and end year "start-year" "end-year"
//4 input fields
//content dump into "top-articles"
$(document).ready(function(){
function searchTerm(search){
   
    var myParamerters = {
       "q": search,
       'api-key': "e6fe3543e4414ea8a7e157e3c9282091"
   }
   return myParamerters
}
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "e6fe3543e4414ea8a7e157e3c9282091",
  'q': "car"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

})