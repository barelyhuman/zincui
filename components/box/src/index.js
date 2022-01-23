import React from 'react'
import {modsToStyle} from 'spacery'

const Box = ({elm = 'div', children, ...props}) => {
	const {style, sanitizedProps} = modsToStyle(props, 'px') // Pass dimension as an empty string so it used the actual numbers

	return React.createElement(
		elm,
		{
			style,
			...sanitizedProps,
		},
		children
	)
}

export default Box
