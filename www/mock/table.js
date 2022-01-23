import React from 'react'
import {css} from 'goober'
import roles from 'zinccolors/roles'

const isValidSize = value => {
	return !(Number(value.split('B')[0]) > 110)
}

const textSuccess = css`
	color: ${roles.success};
`

const textError = css`
	color: ${roles.error};
`

export const fields = [
	{
		key: 'file',
		label: 'file',
		modifier: v => v.replace('./', ''),
	},
	{
		key: 'size',
		label: 'size',
		modifier: v =>
			isValidSize(v) ? (
				<span className={textSuccess}>{v} </span>
			) : (
				<span className={textError}>{v}</span>
			),
	},
	{
		key: 'gzip',
		label: 'gzip',
		modifier: v =>
			isValidSize(v) ? (
				<span className={textSuccess}>{v} </span>
			) : (
				<span className={textError}>{v}</span>
			),
	},
	{
		key: 'brotli',
		label: 'brotli',
		modifier: v =>
			isValidSize(v) ? (
				<span className={textSuccess}>{v} </span>
			) : (
				<span className={textError}>{v}</span>
			),
	},
]

export const data = [
	{
		file: 'Example File',
		size: '125B',
		gzip: '100B',
		brotli: '96B',
	},
]
