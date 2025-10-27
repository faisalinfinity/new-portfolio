import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},

	images: {
		domains: ["res.cloudinary.com", "images.unsplash.com","i.postimg.cc"],
	},
};

export default withContentlayer(nextConfig);
