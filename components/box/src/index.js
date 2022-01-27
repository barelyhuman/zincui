import React from 'react'
import {modsToStyle as spaceModsToStyle} from 'spacery'
import {modsToStyle as flexModsToStyle} from 'flexery'

const Box = ({elm = 'div', style, children, ...props}) => {
	const {style: spaceModifierStyles, sanitizedProps} = spaceModsToStyle(
		props,
		'px'
	)
	const {
		style: flexModifierStyles,
		sanitizedProps: finalSantizedProps,
	} = flexModsToStyle(sanitizedProps)

	return React.createElement(
		elm,
		{
			style: {
				...spaceModifierStyles,
				...flexModifierStyles,
				...style,
			},
			...finalSantizedProps,
		},
		children
	)
}

export default Box
