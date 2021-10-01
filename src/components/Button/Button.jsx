import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export const Button = ({
	variation,
	backgroundColor,
	size,
	label,
	...props
}) => {
	return (
		<button
			type='button'
			className={[
				"codingbreak-button",
				`codingbreak-button--${size}`,
				`codingbreak-button--${variation}`,
			].join(" ")}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	variation: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	backgroundColor: null,
	variation: "secondary",
	size: "medium",
	onClick: undefined,
};
