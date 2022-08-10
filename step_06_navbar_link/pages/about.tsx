import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const about: NextPage = () => {
	return (
		<div>
			<h1>This is the about page </h1>
			<Navbar></Navbar>
			<ul>
				<li>Name : Mishaal Khan</li>
			</ul>
		</div>
	);
};

export default about;
