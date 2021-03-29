function slugify(string, options) {
	options = (typeof options === 'string') ? {
		replacement: options
	}: options || {};
	var slug = string.split('').reduce(function (result, ch) {
		return result + (slugifyCharMap[ch] || ch).replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
	},
	'').trim().replace(/[-\s]+/g, options.replacement || '-');
	return options.lower ? slug.toLowerCase() : slug
}
slugify.extend = function (customMap) {
	for (var key in customMap) {
		slugifyCharMap[key] = customMap[key]
	}
};
