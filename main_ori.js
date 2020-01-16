$(document).ready(function() {
  $("#btn-search").click(function() {
    $.getJSON("quotes.json", function(data) {
      var quotes = data;
      var quotesList = document.getElementById("quotes-list");
      var quoteBox = document.getElementById("quote-box");
      var authorBox = document.getElementById("author-box");
      var catBox = document.getElementById("category-box");
      var quoteOutput = "";

      for (var i = 0; i <= quotes.length - 1; i++) {
        // for (key in quotes[i]) {
        // console.log(quotes[i]);
        // if (quotes[i].hasOwnProperty(key)) {
        quoteBox.innerHTML += quotes[i].quote + "<hr />";
        authorBox.innerHTML += quotes[i].author + "<hr />";
        catBox.innerHTML += quotes[i].category + "<hr />";
      } // hasOwnProperty check
      // } // for each object
      // quoteList.innerHTML = quoteOutput;
    });
  });
});

// $(document).ready(function() {
//     $("#btn-search").click(function() {
//       $.getJSON("quotes.json", function(data) {
//         var quotes = data;
//         console.log(quotes);
//         var quotesList = document.getElementById("quotes-list");

//         for (var i = 0; i < quotes.length; i++) {
//           quotesList.innerHTML +=
//             "<div class='col-4'>" +
//             quotes[i].quote +
//             "</div>" +
//             "<div class='col-4'>" +
//             quotes[i].author +
//             "</div>" +
//             "<div class='col-4'>" +
//             quotes[i].category +
//             "</div>";
//         }
//       });
//     });
//   });
