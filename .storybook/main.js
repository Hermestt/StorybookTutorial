module.exports = {
	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: {
				default: "lightgrey",
				values: {
					name: "lightgrey",
					value: "#fafafa",
				},
				measure: false,
			},
		},
	],
};
