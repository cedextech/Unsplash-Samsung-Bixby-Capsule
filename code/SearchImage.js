var http = require('http')
var console = require('console')

module.exports.function = function searchImage (keyword) {

  var url = 'https://api.unsplash.com/search/photos';
  var gallery = [];

  var response = http.getUrl(url, {
    format: 'json',
    query: {
      client_id: 'a6c4c68661ab7f90cd23e018e7ea1e95af40c0bc7035c9f7d8aae0495fb2637a',
      query: keyword
    }
  });

  for (var i=0; i<response.results.length; i++) {
    gallery.push({
      image: response.results[i].urls.small,
      description: response.results[i].alt_description
    })
  }

  return gallery;
}
