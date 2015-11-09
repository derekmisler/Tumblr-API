  var thumbnail,
      thumbnailWidth;
  $.ajax({
    url: "http://api.tumblr.com/v2/blog/montanamoment.tumblr.com/posts?api_key=v6y8zw1aQk66fJevXGoFyv3BHfURcphvUD6hl88BB3yVyLKVm6",
    dataType: 'jsonp',
    success: function(posts){
      console.log('success');
      var postings = posts.response.posts;
      var text = '';
      for (var i in postings) {
        var p = postings[i];
        var image = p.photos[0].alt_sizes[2];
        text += '<li><a href="' + p.post_url + '" target="_blank" style="background-image: url(' + image.url + ')"></a></li>';
      }
      $('#tumblr ul').append(text);
      thumbnail = $('#tumblr').find('a'),
      thumbnailWidth = thumbnail.width();
      thumbnail.height(thumbnailWidth);
      thumbnail.each(function(i) {
        $(this).delay((i++) * 100).fadeTo(200, 1);
      });
    }
  });
  $( window ).resize(function() {
      thumbnail = $('#tumblr').find('a'),
      thumbnailWidth = thumbnail.width();
      thumbnail.height(thumbnailWidth);
  });
