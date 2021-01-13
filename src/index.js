import _ from 'lodash';

function component() {
    console.log('javascript bundle ok');

    /*var myFirstPromise = new Promise(function(resolve, reject) {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code.
        // In reality, you will probably be using something like XHR or an HTML5 API.
        setTimeout(function(){
            resolve("Success!"); // Yay! Everything went well!
        }, 250);
    });*/


    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work (before)
    // Lodash, now imported by this script (after)
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
