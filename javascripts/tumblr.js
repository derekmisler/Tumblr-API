$.ajax({
	url: "http://api.tumblr.com/v2/blog/montanamoment.tumblr.com/info?api_key=v6y8zw1aQk66fJevXGoFyv3BHfURcphvUD6hl88BB3yVyLKVm6",
	dataType: 'jsonp',
	success: function(info){
		console.log('Tumblr API success');
		$("#tumblr h2").html(info.response.blog.title);
	}
});
$.ajax({
	url: "http://api.tumblr.com/v2/blog/montanamoment.tumblr.com/posts?api_key=v6y8zw1aQk66fJevXGoFyv3BHfURcphvUD6hl88BB3yVyLKVm6",
	dataType: 'jsonp',
	success: function(posts){
		console.log('Tumblr API image success');
		var postings = posts.response.posts;
		var text = '';
		for (var i in postings) {
			var p = postings[i];
			var image = p.photos[0].alt_sizes[2];
			text += '<li><a href="' + p.post_url + '" target="_blank"><img class="" src=' + image.url +'></a></li>';
		}
		$('#tumblr .block-grid').append(text);
	}
});
$(function() {
	$('#tumblr').find('img').each(function(i) {
		$(this).delay((i++) * 100).fadeTo(200, 1);
	});
});