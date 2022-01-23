#!/bin/bash

new_project="components/$1"
current=$(pwd)
mkdir -p $new_project
cd $new_project
touch package.json 
cat <<EOF > package.json
{
	"name": "@zincui/$1",
	"version": "0.0.0",
	"main": "./dist/index.js",
	"module": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"scripts": {
		"prebuild": "rm -rf dist",
		"build": "babel 'src/*.js' --out-dir=dist; pnpm run copy",
		"copy": "shx cp src/*.d.ts dist/",
		"prepublishOnly": "npm run build",
		"watch": "babel --watch 'src/*.js' --out-dir=dist"
	},
	"babel": {
		"presets": [
			"@babel/preset-react"
		]
	},
	"xo": {
		"extends": "xo-react",
		"prettier": "true"
	},
	"dependencies": {
		"@zincui/box": "0.0.0",
		"goober": "^2.1.7",
		"zinccolors": "github:barelyhuman/zinccolors"
	},
	"devDependencies": {
		"postcss": "^8.4.5",
		"tailwindcss": "^3.0.7"
	},
	"engines": {
		"node": ">=12"
	}
}
EOF
mkdir -p src 
touch src/index.js
cd $current
pnpm install