$(document).ready(function() {
  $("#btn-search").click(function() {
    $.getJSON("quotes.json", function(data) {
      var response = data;
      var output = "";

      for (key in response) {
        // console.log(response[key].quote);
        output +=
          "<li>" + response[key].quote + " - " + response[key].author + "</li>";
      }

      var quoteList = document.getElementById("quote-list");
      quoteList.innerHTML = output;
    });
  });
});
