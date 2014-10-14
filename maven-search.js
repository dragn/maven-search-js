var http = require('http');

var col = '                                                             ';

String.prototype.padRight = function (padValue) {
     return String(this + padValue).slice(0, padValue.length);
};

function parse(str) {
  var data = JSON.parse(str);
  console.log();
  console.log('%s%s', 'Name'.padRight(col), 'Release Date');
  console.log('%s%s', '===='.padRight(col), '============');
  for (var i in data.response.docs) {
    var doc = data.response.docs[i];
    console.log('%s%s',
        (doc.id + (doc.latestVersion ? ':' + doc.latestVersion : '')).padRight(col),
        new Date(doc.timestamp).toLocaleDateString());
  }
}

if (process.argv.length < 3) {
  console.log('Simple script for searching maven artifacts names and versions from "http://search.maven.org".');
  console.log();
  console.log('Usage: ');
  console.log('  node ' + process.argv[1] + ' [<group name>] <artifact name>');
  process.exit();
}

var url = 'http://search.maven.org/solrsearch/select?q=';

if (process.argv.length == 3) {
  url += encodeURIComponent(process.argv[2]);
} else {
  url += encodeURIComponent('g:"' + process.argv[2] + '" AND a:"' + process.argv[3] + '"');
  url += '&core=gav&wt=json';
}

url += '&rows=100';

//console.log('URL: ' + url);

http.get(url, function(res) {
    if (res.statusCode !== 200) {
      console.error('Bad response code: ' + res.statusCode);
      process.exit();
    }
    res.setEncoding('utf8');
    var buffer = '';
    res.on('data', function(chunk) {  
      if (chunk) buffer += chunk;
    });
    res.on('end', function() {
      parse(buffer);
    });
});

