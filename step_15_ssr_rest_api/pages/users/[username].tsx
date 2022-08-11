import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import axios from "axios";

interface Props {
	users: [User];
}
interface User {
	id: string;
	body: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const usersReq = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return {
		props: {
			users: usersReq.data,
		},
	};
};

const username: NextPage<Props> = ({ users }) => {
	return (
		<div>
			<h1>SSR Rest API</h1>
			<ul>
				{users.map((user: User) => (
					<div>
						<Link key={user.id} href={`/users/${user.id}`}>
							<ul>
								<li>
									<h3> {user.body} &rarr;</h3>
								</li>
							</ul>
						</Link>
					</div>
				))}
			</ul>
		</div>
	);
};

export default username;
