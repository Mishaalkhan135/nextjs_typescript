import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Counter = () => {
	const { count } = useSelector((state: RootState) => state.count);
	return <div>Count: {count}</div>;
};

export default Counter;
