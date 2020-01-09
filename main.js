$(document).ready(function() {
  $("#btn-search").click(function() {
    $.getJSON("quotes.json", function(data) {
      var quotes = data;
      var quoteOutput = "";

      for (key in quotes) {
        // console.log(response[key].quote);
        if (quotes.hasOwnProperty(key)) {
          quoteOutput += "<p>" + quotes[key].quote + "</p>" + "<hr />";
        } // hasOwnProperty check
      } // for each object
      var quoteList = document.getElementById("quote-box");
      quoteList.innerHTML = quoteOutput;
    });
  });
});
