import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";

export interface User {
	username: string;
	id: string;
}
function List({ users }: { users: User[] }) {
	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					<Link href={`/users/${user.id}`} passHref>
						<a> {user.username} </a>
					</Link>
				</li>
			))}
		</ul>
	);
}

const Home: NextPage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<User[]>([]);

	const getUsers = async () => {
		const req = await axios.get(`${process.env.API_ENDPOINT}/users`);
		const users = await req.data;
		console.log(users);

		setData(users);
		setLoading(false);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.grid}>
					{loading && <div>Loading users...</div>}
					{data.length > 0 && <List users={data} />}
				</div>
			</main>
		</div>
	);
};

export default Home;
