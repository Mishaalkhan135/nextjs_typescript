import type { NextComponentType, NextPageContext } from "next";
import Head from "next/head";

interface Props {
	title: string;
	subtitle: string;
	description: string;
	image: string;
}
const PostHead: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.title} />
				{/* open-graph meta */}
				<meta property='og:title' content={props.title} />
				<meta property='og:description' content={props.subtitle} />
				<meta property='og:image' content={props.image} />
				{/* twitter card meta */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content={props.title} />
				<meta name='twitter:description' content={props.description} />
				<meta name='twitter:image' content={props.image} />
			</Head>
		</div>
	);
};
export default PostHead;
