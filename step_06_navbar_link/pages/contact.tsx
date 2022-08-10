import type { NextPage } from "next";
import Navbar from "../components/Navbar";
const contact: NextPage = () => {
	return (
		<div>
			<h1>This is the contact page</h1>
			<Navbar></Navbar>
			<ul>
				<li>Name : Mishaal Khan</li>
			</ul>
		</div>
	);
};

export default contact;
