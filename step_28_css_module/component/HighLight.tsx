import type { NextComponentType, NextPageContext } from "next";
interface Props {
	text: string;
}
const HighLight: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<>
			<span>{props.text}</span>
			<style jsx>{`
				span {
					background: yellow;
					font-weight: bold;
				}
			`}</style>
		</>
	);
};
export default HighLight;
