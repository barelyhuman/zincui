import React from 'react'
import Button from '@zincui/button'
import Box from '@zincui/box'
import Input from '@zincui/input'
import Table from '@zincui/table'

import {css} from 'goober'
import {data as tableData, fields} from '../mock/table'
import roles from 'zinccolors/roles'

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

const BorderBox = (props) => {
	return <Box className={borderStyle} {...props} />
}

const SurfaceBox = (props) => {
	return <Box className={surfaceStyle} {...props} />
}

const Home = () => {
	return (
		<>
			<Box
				margin-12
				flex
				center
				style={{height: '100vh', flexDirection: 'column'}}
			>
				<Box flex center>
					<Image src="/logo.png" width="64" height="64" />
					<h1>ZincUI</h1>
				</Box>
				<p className="text-dim">
					Monochromatic Design System with React Components
				</p>
				<a href="#installation">
					<Box
						flex
						center
						className="surface rounded"
						style={{height: 32, width: 32}}
					>
						<span>&darr;</span>
					</Box>
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
				</BorderBox>
			</Box>
			<Box padding-12>
				<h3>Input (@zincui/input)</h3>
				<BorderBox padding-16>
					<Input marginR-8 placeholder="Default" />
					<Input success marginR-8 placeholder="Success" />
					<Input error marginR-8 placeholder="Error" />
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
