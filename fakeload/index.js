var querystring = require('querystring');
var http = require('http');

//THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    context.log('generating mock data');

    let num = Math.floor(Math.random() * 10);
    let m = {
        id: num,
        unique: uuidv4()
    };

    context.log(m);
    context.log(querystring.stringify(m));//temp
    PostCode(m);

    context.done();
}

function PostCode(model) {
    // Build the post string from an object
    var post_data = querystring.stringify(model);
  
    // An object of options to indicate where to post to
    var post_options = {
        host: 'deepthunker.azurewebsites.net',
        port: '443',
        path: '/api/api?code=Kbx5r5MAbW3ZiWvvaPCLCceNXbjXHq56CgUnqze3tD/XEP2rN3F50g==',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };
  
    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
  
    // post the data
    post_req.write(post_data);
    post_req.end();
  }

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}