(() =>{
"use strict";
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

	let threeLanguages = users.filter(user => user.languages.length >= 3);
	console.log(threeLanguages);

	let emails = users.map(user => user.email);
	console.log(emails);

	let avgTotalYears = users.reduce((total, user, index) => {
		if (index === users.length - 1) {
			return (total + user.yearsOfExperience) / users.length;
		}
		return total + user.yearsOfExperience;
	}, 0);
	console.log(avgTotalYears);

	let longestEmail = users.reduce((longest, user, index, array) => {
		if (index === array.length - 1) {
			longest.push(user.email);
			// sort the array of emails by length
			let sortedEmails = longest.sort((a, b) => b.length - a.length);
			return sortedEmails[0];
		}
		longest.push(user.email);
		return longest;
	}, []);
	console.log(longestEmail);

	let instructors = users.reduce((instructors, user, index, array) => {
		if (index === array.length - 1) {
			instructors.push(user.name);
			return instructors.join(', ');
		}
		instructors.push(user.name);
		return instructors;
	},[]);
	console.log(instructors);

	let uniqueLanguages = users.reduce((uniqueLanguages, user, index, array) => {
		user.languages.forEach(language => {
			if (!uniqueLanguages.includes(language)) {
				uniqueLanguages.push(language);
			}
		});
		return uniqueLanguages;
	}, []);

	console.log(uniqueLanguages);


})();