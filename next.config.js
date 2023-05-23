const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**', // Using this to allow all host endpoints, but should be specific to domains for security
			},
		],
	},
};

module.exports = nextConfig;
