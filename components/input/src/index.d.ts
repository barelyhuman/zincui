declare const Input: ({
	value,
	onChange,
	type,
	success,
	error,
	className,
	...props
}: {
	[x: string]: any
	value: any
	onChange: any
	type: any
	success: any
	error: any
	className: any
}) => JSX.Element
export default Input
