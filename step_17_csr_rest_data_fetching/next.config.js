/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		API_ENDPOINT: process.env.API_ENDPOINT,
		API_TOKEN: process.env.API_TOKEN,
	},
};

module.exports = nextConfig;
