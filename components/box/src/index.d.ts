import React from 'react'
declare const Box: ({
	elm,
	children,
	...props
}: {
	[x: string]: any
	elm?: string | undefined
	children: any
}) => React.DOMElement<any, Element>
export default Box
