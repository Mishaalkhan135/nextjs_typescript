import type { NextComponentType, NextPageContext } from "next";
interface Props {
	text: string;
}
const HighLightGlobal: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<>
			<span>{props.text}</span>
			<style jsx global>{`
				span {
					background: blue;
					font-weight: bold;
				}
			`}</style>
		</>
	);
};
export default HighLightGlobal;
