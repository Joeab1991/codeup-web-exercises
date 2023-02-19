

// object literal
const currentWeather = {
	temperature: 54.4,
	humidity: 28,
	clouds: 0,
	windDirection: "NNE"
}

// to access object properties, use dot notation

// console.log(currentWeather.temperature);


// console.log(currentWeather.clouds);

// if I need to use a variable to access
// an object property, I can use bracket notation
let weatherProperty = "clouds";
// console.log(currentWeather["clouds"]);
// console.log(currentWeather[weatherProperty]);

// I can do string operations and math on
// the values of object properties
// console.log(`The current temperature in celsius is ${((currentWeather.temperature - 32) * 5 / 9).toFixed(1)}`);

if (currentWeather.temperature < 80){
	// console.log("It is so cold!!!!");
} else {
	// console.log("Ahhh nice and warm");
}

// Objects are dynamic
// I can change object property values
currentWeather.temperature = 63.7;
// I can delete an object property
delete currentWeather.humidity;
// I can create  new properties
currentWeather.rain = false;

// I can use a for in loop to loop through
// an object's properties, getting their keys
for (let key in currentWeather){
	// console.log(key);
	// console.log(currentWeather[key]);
}

const hourlyWeather = [
	{
		time: "08:00",
		temperature: 78.91,
		feels_like: 78.91
	},
	{
		time: "09:00",
		temperature: 79.57,
		feels_like: 79.57
	},
	{
		time: "10:00",
		temperature: 81.46,
		feels_like: 86.04
	},
	{
		time: "11:00",
		temperature: 84.49,
		feels_like: 89.24
	}
];

// I can use a forEach loop to loop over an array of objects

// hourlyWeather.forEach(hourlyForecast =>
//     console.log(`At ${hourlyForecast.time} the temperature will be ${hourlyForecast.temperature}`)
// );

// I can destructure an object in the parameter of the
// forEach loop

// hourlyWeather.forEach(({time, temperature}) => console.log(`At ${time} the temperature will be ${temperature}`));

// I can use a for loop

// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(hourlyWeather[i].temperature);
// }

// for ... of loop to loop over an array
// initialize an empty array
const temps = [];
// loop over the array of objects, pushing each
// temperature value into the temperature array
for (const forecast of hourlyWeather){
	// console.log(forecast.temperature);
	temps.push(forecast.temperature);
}
// console.log(temps);
// initialize an accumulator variable
let total = 0;
// loop over the temperatures array
temps.forEach(temp=>{
	total += temp;
});
//
console.log("The average temperature is " + total/temps.length);



// you can also loop over a string with a for ... of

const myString = "supercalifragilisticexpialodocious";

// for (const letter of myString) console.log(letter);