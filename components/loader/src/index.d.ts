declare const Loader: ({
	success,
	error,
	className,
	size,
	delay,
	...props
}: {
	[x: string]: any
	success: any
	error: any
	className: any
	size?: string | undefined
	delay?: number | undefined
}) => any
export default Loader
