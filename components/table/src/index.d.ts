declare const Table: ({
	className,
	data,
	fields,
	...props
}: {
	[x: string]: any
	className: any
	data: any
	fields: any
}) => JSX.Element

export default Table
