import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

export const Checkbox = ({ label }) => {
	return (
		<div className='codingbreak-checkbox'>
			<input type='checkbox' id='test-checkbox'></input>
			<label htmlFor='test-checkbox'>{label}</label>
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
};
