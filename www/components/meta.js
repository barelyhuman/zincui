import Head from 'next/head'
import React from 'react'

const Meta = () => {
	return (
		<Head>
			{/* Icons */}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />

			<title>ZincUI</title>
			<meta name="title" content="ZincUI" />
			<meta
				name="description"
				content="Monochromatic and Modular Design System with React Components"
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://zincui.reaper.im/" />
			<meta property="og:title" content="ZincUI" />
			<meta
				property="og:description"
				content="Monochromatic and Modular Design System with React Components"
			/>
			<meta property="og:image" content="" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://zincui.reaper.im/" />
			<meta property="twitter:title" content="ZincUI" />
			<meta
				property="twitter:description"
				content="Monochromatic and Modular Design System with React Components"
			/>
			<meta property="twitter:image" content="" />
		</Head>
	)
}

export default Meta
