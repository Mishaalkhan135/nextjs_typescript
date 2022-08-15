import { useState } from "react";
import Head from "next/head";
import CartContext from "../component/context/CartContext";
import Navbar from "../component/Navbar";
import { AppProps } from "next/app";
import { Item } from "../component/context/types";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [items, setItems] = useState<{ [item: string]: Item }>({});

	return (
		<>
			<Head>
				<link
					href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
					rel='stylesheet'
				/>
			</Head>
			<CartContext.Provider value={{ items, setItems }}>
				<Navbar />
				<div className='w-9/12 m-auto pt-10'>
					<Component {...pageProps} />
				</div>
			</CartContext.Provider>
		</>
	);
};

export default MyApp;
