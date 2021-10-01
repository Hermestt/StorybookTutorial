import React from "react";
import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variation: "primary",
	label: "Primary button",
};

export const Secondary = Template.bind({});
Secondary.args = { variation: "secondary", label: "Secondary button" };

export const Tertiary = Template.bind({});
Tertiary.args = { variation: "tertiary", label: "Tertiary button" };

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Large button",
};

export const Medium = Template.bind({});
Medium.args = {
	size: "medium",
	label: "Medium button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Small button",
};
