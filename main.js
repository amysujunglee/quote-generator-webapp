$(document).ready(function() {
  $("#btn-search").click(function() {
    $.getJSON("quotes.json", function(data) {
      var quotes = data;
      // console.log(quotes);
      var output = "";

      for (key in quotes) {
        if (quotes.hasOwnProperty(key)) {
          output +=
            "<div class='col-4'>" +
            quotes[key].quote +
            "</div>" +
            "<div class='col-4'>" +
            quotes[key].author +
            "</div>" +
            "<div class='col-4'>" +
            quotes[key].category +
            "</div>" +
            "<div class='col-12 quote-border my-3'></div>";
        }
      }
      var quotesList = document.getElementById("quotes-list");
      quotesList.innerHTML = output;
      console.log(output);
    });
  });
});
