import _ from 'lodash';

function component() {
    console.log(1111);
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work (before)
    // Lodash, now imported by this script (after)
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
