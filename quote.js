$(document).ready(function() {
    var quote = '';
    var author = '';
  
    $("#getQuote").on("click", function() {
        $.getJSON('https://crossorigin.me/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(json) {
          var html = '';
          quote = json[0].content;
          author = json[0].title;
          html += "<span class='quoteContent'>" + quote + "</span><br /><span class='quotePerson'>- " + author + "</span>";
          $('#quote').html(html);
          
          $("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?hashtags=quoteoftheday&text='" + $("#quote").text() + "'")
          
          $.ajaxSetup({ cache: false});
        });
    });
});
