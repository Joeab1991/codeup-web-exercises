import {GITHUB_TOKEN} from "./keys.js";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date
//  of the last commit that user made. Reference the github api documentation to achieve this.

(async() => {
	const getLastCommit = async (username) => {
		try {
			let response = await fetch(`https://api.github.com/users/${username}/events/public`, {
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


})();