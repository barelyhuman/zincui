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
	"exports": {
		".": {
			"import": "./dist/index.mjs",
			"require": "./dist/index.js"
		},
		"./package": "./package.json",
		"./package.json": "./package.json"
	},
	"main": "./dist/index.js",
	"module": "./dist/index.mjs",
	"types": "./dist/index.d.ts",
	"files": [
		"dist"
	],
	"scripts": {
		"prebuild": "rm -rf dist",
		"build": "pnpm run build:cjs;pnpm run build:module; pnpm run copy",
		"build:cjs": "esbuild src/index.js  --loader:.js=jsx --format=cjs --platform=node --target=node12 --outfile=dist/index.js --minify",
		"build:module": "esbuild src/index.js  --loader:.js=jsx --format=esm --platform=browser --target=node12 --outfile=dist/index.mjs --minify",
		"copy": "shx cp src/*.d.ts dist/",
		"prepublishOnly": "npm run build",
		"watch": "pnpm run build:module -- --watch"
	},
	"xo": {
		"extends": "xo-react",
		"prettier": "true",
		"rules": {
			"unicorn/prefer-module": "off"
		}
	},
	"dependencies": {
		"@zincui/box": "^0.0.5",
		"zinccolors": "github:barelyhuman/zinccolors"
	},
	"engines": {
		"node": ">=12"
	},
	"publishConfig": {
		"access": "public"
	},
	"devDependencies": {
		"esbuild": "^0.14.14"
	}
}
EOF
mkdir -p src 
touch src/index.js
cd $current
pnpm install