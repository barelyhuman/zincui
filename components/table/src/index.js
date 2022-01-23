import {css} from 'goober'
import React from 'react'
import Box from '@zincui/box'
import roles from 'zinccolors/roles'
import {nanoid} from 'nanoid'

const tableStyle = css`
	table-layout: fixed;
`
const tableDataAndHeaderStyle = css`
	text-align: left;
	padding: 8px 12px;
	padding-left: 0px;
	word-wrap: break-word;

	&:last-child {
		text-align: right;
		padding-right: 0px;
	}
`

const tableHeaderStyle = css`
	color: ${roles.dim};
	text-transform: uppercase;
`

const Table = ({className, data, fields, ...props}) => {
	const headers = fields.map((h) => (
		<th
			key={`header-${h.key}`}
			className={[tableDataAndHeaderStyle, tableHeaderStyle].join(' ')}
		>
			{h.label}
		</th>
	))

	const rows = data.map((item) => (
		<Row key={nanoid()} data={item} fields={fields} />
	))
	return (
		<Box elm="table" className={[tableStyle, className].join(' ')} {...props}>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Box>
	)
}

const Row = ({data, fields}) => {
	return (
		<tr>
			{fields.map((field) => (
				<td
					key={`data-${field.key}-${nanoid()}`}
					className={[tableDataAndHeaderStyle].join(' ')}
				>
					{field.modifier(data[field.key])}
				</td>
			))}
		</tr>
	)
}

export default Table
