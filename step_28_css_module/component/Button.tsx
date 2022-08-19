import type { NextComponentType, NextPageContext } from "next";
interface Props {
	name: string;
}
const Button: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<>
			<button className='button'>{props.name}</button>
			<style jsx>{`
				.button {
					padding: 1em;
					border-radius: 1em;
					border: none;
					background: green;
					color: white;
				}
			`}</style>
		</>
	);
};
export default Button;
