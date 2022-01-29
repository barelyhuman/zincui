import React from 'react'
import Box from '@zincui/box'
import {css, setup} from 'goober'
import roles from 'zinccolors/roles.js'

setup(React.createElement)

const buttonStyle = css`
	background: ${roles.surface};
	border: 2px solid ${roles.surface};
	color: ${roles.text};

	padding: 20px;
	display: inline-flex;
	align-items: center;
	justify-items: center;
	font-size: 0.83rem;
	border-radius: 8px;
	font-weight: 700;
	height: 33px;
	line-height: 21px;

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

	&.pill {
		border-radius: 9999px;
	}

	&.large {
		height: 52px;
		font-size: 1em;
	}
`

const Button = ({
	children,
	success,
	error,
	pill,
	large,
	className,
	...props
}) => {
	return (
		<Box
			elm="button"
			className={[
				buttonStyle,
				success && 'success',
				error && 'error',
				pill && 'pill',
				large && 'large',
				className || '',
			].join(' ')}
			{...props}
		>
			{children}
		</Box>
	)
}

export default Button
