/*import * as _ from 'lodash';

function component() {
    console.log('typescript bundle');
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());*/

export class TestClass {
    constructor() {
    }

    func() {
        this.test(() => {
            console.log('arrow function bundle ok');
        });
    }

    test(callback?: any) {
        if (callback) {
            callback();
            return;
        } else {
            console.log('typescript bundle ok');
        }

        let myFirstPromise = new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                resolve("promise bundle ok!"); // Yay! Everything went well!
            }, 250);
        });

        myFirstPromise.then((data: string) => {
            console.log(data);
        })
            .catch((err: Error) => {
                console.log(err);
            })
    }
}

const testC = new TestClass();
testC.test();
testC.func();
