import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

interface Props {
	name: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { name } = context.params!;
	return {
		props: {
			name,
		},
	};
};

const Name: NextPage<Props> = ({ name }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Step 03 - Name</title>
				<meta name='description' content='Name Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello {name}</h1>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Name;
