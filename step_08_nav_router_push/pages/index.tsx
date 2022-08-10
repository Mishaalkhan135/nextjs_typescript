import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Private from "../components/Private";
import Public from "../components/Public";

const Home: NextPage = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const router = useRouter();

	useEffect(() => {
		// setLoggedIn(true);
		if (!loggedIn) {
			router.push("/login");
		}
	}, [loggedIn]);

	return loggedIn ? <Private /> : <Public />;
};

export default Home;
