/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'cdn.discordapp.com',
			'images.unsplash.com',
			'banner2.cleanpng.com',
			'png.pngtree.com',
		],
	},
	output: 'standalone',
};

export default nextConfig;
