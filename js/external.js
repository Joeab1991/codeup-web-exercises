"use strict";
console.log("Hello from external JavaScript");

//alert('Welcome to my Website!');

//let favoriteColor = prompt(`What's your favorite color?`);
//alert(`Cool, ${favoriteColor} is my favorite too!`);

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to understand
// how real world conditions can be represented with code.

// You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

// let theLittleMermaid = parseFloat(prompt(`How many days did you rent The Little Mermaid?`));
// let brotherBear = parseFloat(prompt(`How many days did you rent Brother Bear?`));
// let hercules = parseFloat(prompt(`How many days did you rent Hercules?`));
// let pricePerDay = parseFloat(prompt(`How much did you pay per day?`));
// alert(`Your total price is: $${(theLittleMermaid + brotherBear + hercules) * pricePerDay}`);

// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// let google = parseFloat(prompt(`How many hours did you work for Google this week?`));
// let googleRate = parseFloat(prompt(`What is your hourly rate for Google?`));
// let amazon = parseFloat(prompt(`How many hours did you work for Amazon this week?`));
// let amazonRate = parseFloat(prompt(`What is your hourly rate for Amazon?`));
// let facebook = parseFloat(prompt(`How many hours did you work for Facebook this week?`));
// let facebookRate = parseFloat(prompt(`What is your hourly rate for Facebook?`));
// alert(`Your pay this week is: $${(google * googleRate) + (amazon * amazonRate) + (facebook * facebookRate)}`);

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
// her current schedule.

// let classSize = parseInt(prompt(`What is the current class size?`));
// let maxSize = 30;
// let scheduleConflict = confirm(`Press OK if this class interferes with anything else in your schedule.`);
// let enrolled = ((classSize < maxSize) && (scheduleConflict === false));
// alert(`Enrolled: ${enrolled}`);


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

// let cart = parseInt(prompt(`How many items are you purchasing?`));
// let premiumMember = confirm(`Press OK if you are a premium member`);
// let offerExpired = confirm(`Press OK if the offer is not expired.`);
// let offerApplied = (cart > 2 || (premiumMember === true)) && offerExpired !== false;
// alert(`Offer applied: ${offerApplied}`);


