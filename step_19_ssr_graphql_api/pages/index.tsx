import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import GET_ROCKETS from "../lib/apollo/queries/getRockets";
import { initApollo } from "../lib/apollo";

export interface Rocket {
	id: string;
	name: string;
	company: string;
	country: string;
	active: string;
	description: string;
}
export interface RocketInterface {
	rockets: Rocket[];
}
const client = initApollo();
export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query<RocketInterface>({
		query: GET_ROCKETS,
	});
	return {
		props: {
			rockets: data.rockets,
		},
	};
};

const Home: NextPage<RocketInterface> = ({ rockets }) => {
	return (
		<div>
			<div>Rocket list</div>
			<br />
			<div>Rendered on server side </div>
			<br />
			<div>
				{rockets?.map((rocket, index) => (
					<div style={{ cursor: "pointer" }}>
						<Link href={`/rocket/${rocket.id}`} passHref>
							<p>
								{index + 1}:
								<a style={{ textDecoration: "underline" }}>
									{rocket.name}
								</a>
							</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
