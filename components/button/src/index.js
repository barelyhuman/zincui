import React from 'react'
import Box from '@zincui/box'
import {css, setup} from 'goober'
import roles from 'zinccolors/roles'

setup(React.createElement)

const buttonStyle = css`
	padding: 8px 16px;
	font-size: 15px;
	border-radius: 6px;
	font-weight: 500;
	background: ${roles.surface};
	border: 0px;
	color: ${roles.text};

	&:hover,
	&:focus {
		cursor: pointer;
		opacity: 0.8;
	}

	&.success {
		background: ${roles.success};
		color: ${roles.bright};
	}

	&.error {
		background: ${roles.error};
		color: ${roles.bright};
	}
`

const Button = ({children, success, error, className, ...props}) => {
	return (
		<Box
			elm="button"
			className={[
				buttonStyle,
				success && 'success',
				error && 'error',
				className || '',
			].join(' ')}
			{...props}
		>
			{children}
		</Box>
	)
}

export default Button
