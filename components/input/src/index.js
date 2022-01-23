import React from 'react'
import Box from '@zincui/box'
import {css} from 'goober'
import roles from 'zinccolors/roles'

const inputStyle = css`
	background: ${roles.surface};
	font-size: 15px;
	font-weight: 500;
	color: ${roles.text};
	border: 2px solid ${roles.surface};
	border-radius: 4px;
	padding: 6px 16px;
	outline: ${roles.base};

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
				className,
			].join(' ')}
			value={value}
			type={type}
			onChange={onChange}
			{...props}
		/>
	)
}

export default Input
