$(document).ready(function() {
  // when the user click the 'search' button
  $("#btn-search").click(function() {
    // call the ajax here
    $.getJSON("quotes.json", function(data) {
      // just display in console
      console.log(data);
      // display in html
      var quoteList = "";
      $.each(data, function(key, quote) {
        quoteList += "<li>" + quote.quote + "</li>";
      });
      $("#quote-list").append(quoteList);
    });
  });
});
