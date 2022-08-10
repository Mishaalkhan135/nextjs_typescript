import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
interface Props {}
const Navbar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<div style={{ color: "blue" }}>
			<ol>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/contact' prefetch={false}>
						Contact
					</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ol>
		</div>
	);
};
export default Navbar;
