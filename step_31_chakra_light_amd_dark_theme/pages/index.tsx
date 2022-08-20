import type { NextPage } from "next";
import Head from "next/head";
import { VStack, Button, Text, useColorMode } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VStack padding='10'>
				<Text fontSize='4xl' fontWeight='bold' as='h1'>
					Chakra UI
				</Text>
				<Text fontSize='2xl' fontWeight='semibold' as='h2'>
					Rendering in {colorMode} mode
				</Text>
				<Button aria-label='UI Theme' onClick={toggleColorMode}>
					Toggle {colorMode === "light" ? "dark" : "light"}
					mode
				</Button>
			</VStack>
		</div>
	);
};

export default Home;
