let https = require('https');

function call(url, data) {
    let json = JSON.stringify(data);
    let options = {
        'headers': {
            'Accept': 'application/vnd.github.inertia-preview+json',
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'actions/test-artifact-cancel'
        },
        'host': 'api.github.com',
        'path': url,
        'method': 'GET'
 }
