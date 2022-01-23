import React from 'react'
// eslint-disable-next-line import/no-unassigned-import
import '../styles/globals.css'
import Meta from '../components/meta'

const MyApp = ({Component, pageProps}) => {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
