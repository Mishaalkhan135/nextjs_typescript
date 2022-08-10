import type { NextPage } from "next";
import Link from "next/link";

const index = () => {
	return (
		<div style={{ color: "blue", fontSize: 35 }}>
			<ol>
				<li>
					<Link href='/blog/2021-01-01/happy-new-year'>
						Read post
					</Link>
				</li>
				<li>
					<Link href='/blog/2021-03-05/match-update'>Read post</Link>
				</li>
				<li>
					<Link href='/blog/2021-04-23/i-love-nextjs'>Read post</Link>
				</li>
				<li>
					<Link
						href={{
							pathname: "/blog/[date]/[slug]",
							query: {
								date: "2020-04-23",
								slug: "i-love-nextjs",
								foo: "bar",
							},
						}}
					>
						I Love NextJS
					</Link>
				</li>
			</ol>
		</div>
	);
};

export default index;
