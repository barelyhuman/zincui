import React, {useEffect} from 'react'
import Button from '@zincui/button'
import Box from '@zincui/box'
import Input from '@zincui/input'
import Table from '@zincui/table'

import {css} from 'goober'
import {data as tableData, fields} from '../mock/table'
import roles from 'zinccolors/roles.js'

import Image from 'next/image'

const borderStyle = css`
	border: 1px solid var(--dimmer);
	border-radius: 4px;
`

const surfaceStyle = css`
	background: ${roles.surface};
	border-radius: 6px;
`

const tableWidth = css`
	width: 100%;
`

const BorderBox = props => {
	return <Box className={borderStyle} {...props} />
}

const SurfaceBox = props => {
	return <Box className={surfaceStyle} {...props} />
}

const Home = () => {
	useEffect(() => {
		// Smooth scroll
		// eslint-disable-next-line no-undef
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function(e) {
				e.preventDefault()

				// eslint-disable-next-line no-undef,react/no-this-in-sfc
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth',
				})
			})
		})
	}, [])
	return (
		<>
			<Box
				margin-12
				flex
				center
				style={{height: '100vh', flexDirection: 'column'}}
			>
				<Box flex center className="wipe-in-right">
					<Image src="/logo.png" width="64" height="64" />
					<h1>ZincUI</h1>
				</Box>
				<p className="text-dim">
					Monochromatic Design System with React Components
				</p>
				<a href="#installation">
					<Button pill>
						<svg
							className="wipe-in-down"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
								fill="currentColor"
							/>
						</svg>
					</Button>
				</a>
			</Box>
			<Box marginX-12>
				<h2 id="installation">Installation</h2>
				<SurfaceBox padding-16>
					<pre>npm install @zincui/&lt;component&gt;</pre>
				</SurfaceBox>
			</Box>
			<Box marginX-12>
				<h2>Components</h2>
			</Box>
			<Box padding-12>
				<h3>Buttons (@zincui/button)</h3>
				<BorderBox padding-16>
					<Button margin-8>Default</Button>
					<Button success margin-8>
						Success
					</Button>
					<Button error margin-8>
						Error
					</Button>
					<Button margin-8 pill>
						Default Pill
					</Button>
					<Button success margin-8 pill>
						Success Pill
					</Button>
					<Button error margin-8 pill>
						Error Pill
					</Button>
					<Button margin-8 large>
						Default Large
					</Button>
				</BorderBox>
			</Box>
			<Box padding-12>
				<h3>Input (@zincui/input)</h3>
				<BorderBox padding-16>
					<Input margin-8 placeholder="Default" />
					<Input success margin-8 placeholder="Success" />
					<Input error margin-8 placeholder="Error" />
					<Input margin-8 large placeholder="large" />
				</BorderBox>
			</Box>
			<Box padding-12>
				<h3>Table (@zincui/table)</h3>
				<BorderBox padding-16>
					<Table className={tableWidth} data={tableData} fields={fields} />
				</BorderBox>
			</Box>
		</>
	)
}

export default Home
