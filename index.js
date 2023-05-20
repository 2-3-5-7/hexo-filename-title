hexo.extend.filter.register('before_post_render', function(data) {
	if (!data.title)
		data.title = data.source.split('/').pop().replace(/\.[^/.]+$/, "");
});