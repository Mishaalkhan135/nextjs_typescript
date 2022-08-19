import type { NextComponentType, NextPageContext } from "next";
interface Props {
	name: string;
}
const FancyButton: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<>
			<button className='button'>{props.name}</button>
			<style jsx>{`
				.button {
					padding: 2em;
					border-radius: 2em;
					background: purple;
					color: white;
					font-size: bold;
					border: pink solid 2px;
				}
			`}</style>
		</>
	);
};
export default FancyButton;
