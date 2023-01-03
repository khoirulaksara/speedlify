module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	skip: false
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://mojo.my.id/"
	]
};
