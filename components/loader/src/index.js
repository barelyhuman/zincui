import React, {useState, useEffect} from 'react'
import Box from '@zincui/box'
import {css, setup} from 'goober'
import roles from 'zinccolors/roles.js'
import {nanoid} from 'nanoid'

setup(React.createElement)

const loaderStyle = css`
	color: ${roles.text};
	display: inline-block;

	&.success {
		color: ${roles.success};
	}

	&.error {
		color: ${roles.error};
	}
`

const dotStyle = css`
	&:first-child {
		opacity: 0.75;
	}

	&:nth-child(2) {
		opacity: 0.45;
	}

	&:nth-child(3) {
		opacity: 0.25;
	}
`

const LoaderDot = ({className}) => (
	<svg
		className={className}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
			fill="currentColor"
		/>
	</svg>
)

const Loader = ({
	success,
	error,
	className,
	size = '1em',
	delay = 500,
	...props
}) => {
	const [dots, setDots] = useState(['.'])

	useEffect(() => {
		const id = setInterval(() => {
			let _dots = dots.slice()
			if (_dots.length >= 3) {
				_dots = ['.']
			} else {
				_dots.push('.')
			}

			setDots(_dots)
		}, delay)
		return () => clearInterval(id)
	}, [dots, delay])

	return (
		<Box
			elm="span"
			className={[
				loaderStyle,
				success && 'success',
				error && 'error',
				className,
			]
				.filter(x => x)
				.map(x => x.trim())
				.join(' ')}
			style={{
				fontSize: size,
				lineHeight: 1,
			}}
			{...props}
		>
			{dots.map(x => (
				<LoaderDot key={nanoid()} className={dotStyle}>
					{x}
				</LoaderDot>
			))}
		</Box>
	)
}

export default Loader
