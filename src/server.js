var http = require('http');

var server = http.createServer(function(request, response) {
	
	console.log('new connect');
	
	response.writeHeader(200, {
	
		'content-type': 'text/html;charset="utf-8"'

	});
	
	response.write('content');
	
	response.end();
	
}).listen(8888);

console.log('server started');
