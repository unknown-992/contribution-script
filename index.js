const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

//define the file path.
const filepath = './data.json';

// amount of contributions to make.
// change this to what ever you want.
let requests = 10;

// log amount of requests to make.
console.log(`Sending ${requests.toLocaleString()} contribution requests...\n`);

// define count.
let count = 0;

// start of function.
const commit = loop => {

    // push contributions once the function is finished.
    if (loop === 0) {
        // push contributions.
        return simpleGit().push().then(
            // log a confirmation message.
            console.log(`Successfully pushed ${count.toLocaleString()}/${requests.toLocaleString()} contributions.`)
        );
    }

    // get a random number for date.
    const x = random.int(0, 52);
    const y = random.int(0, 7);

    // get random date and define data.
    const date = moment()
        // .subtract(2, 'y').add(1, 'd')
        .add(x, 'w').add(y, 'd').format();
    const data = {
        date: date,
        text: 'made by armful#0001'
    }

    // add 1 to the counter.
    count += 1;
    // log each time a contribution is added.
    console.log(`Successfully added contribution.\nData: ${date}\nRequests: ${count.toLocaleString()}/${requests.toLocaleString()}\n`);
    // write a random date to 'data.json'.
    jsonfile.writeFile(filepath, data, () => {
        simpleGit().add([filepath]).commit(date, { '--date': date },
            commit.bind(this, --loop));
    });

}

// send amount of requests.
commit(requests);