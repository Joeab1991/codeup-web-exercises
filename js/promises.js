import {GITHUB_TOKEN} from "./keys.js";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date
//  of the last commit that user made. Reference the github api documentation to achieve this.


const getLastCommit = async (username) => {
	try {
		let response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
			headers: {'Authorization': `token ${GITHUB_TOKEN}`}
		});
		let data = await response.json();
		console.log(data);
		return data[0].created_at;
	} catch (error) {
		console.log(error);
	}
};
console.log(await getLastCommit('Joeab1991'));

// 	TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after
// 	 the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message
// more dynamic.

const wait = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(ms);
		}, ms);
	console.log(`You'll see this after ${ms / 1000} seconds`);
	});
}

console.log(await wait(1000));

