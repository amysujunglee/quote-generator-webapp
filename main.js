$(document).ready(function() {
  // when the user click the 'search' button
  $("#btn-search").click(function() {
    // call the ajax here
    $.getJSON("quotes.json", function(data) {
      // just display in console
      console.log(data);
      // display in html
      $(data).each(function(i, quote) {
        // 'i' is index
        $("#quoteList").append($("<li>").append(quote.quote));
      });
    });
  });
});
