var http = require('http');
var fs = require('fs');

var documentRoot = 'C:/Users/Administrator/Desktop/temp/ui-components/test-app/src';

var server = http.createServer(function(request, response) {
	
	
	var url = request.url;

	var file = documentRoot + url;

	console.log(url);

	fs.readFile(file, function(error, data) {
		if (error) {
			response.writeHeader(404, {
				'content-type': 'text/html;charset="utf-8"'
			});
			response.write("<h2>page not found</h2>");
			response.end();
		} else {
			response.writeHeader(200, {
				'content-type': 'text/html;charset="utf-8"'
			});
			response.write(data);
			response.end();
		}
	});
	
}).listen(9999);

console.log('server started');
