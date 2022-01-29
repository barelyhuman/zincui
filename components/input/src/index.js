import React from 'react'
import Box from '@zincui/box'
import {css} from 'goober'
import roles from 'zinccolors/roles.js'

const inputStyle = css`
	background: ${roles.surface};
	outline: ${roles.base};
	border: 2px solid ${roles.surface};
	color: ${roles.text};

	height: 48px;
	min-width: 256px;
	max-width: 100%;
	width: auto;
	font-size: 1em;
	line-height: 1.25;
	border-radius: 8px;
	padding: 16px;

	&.large {
		font-size: 1.5em;
		height: 60px;
		border-radius: 8px;
		padding: 24px;
	}

	&:focus {
		border-color: ${roles.bright};
	}

	&.error {
		border-color: ${roles.error};
		color: ${roles.error};
	}

	&.success {
		border-color: ${roles.success};
		color: ${roles.success};
	}
`

const Input = ({
	value,
	onChange,
	type,
	success,
	large,
	error,
	className,
	...props
}) => {
	return (
		<Box
			elm="input"
			className={[
				inputStyle,
				error && 'error',
				success && 'success',
				large && 'large',
				className,
			]
				.filter(x => x)
				.map(x => x.trim())
				.join(' ')}
			value={value}
			type={type}
			onChange={onChange}
			{...props}
		/>
	)
}

export default Input
