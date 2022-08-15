import ProductCard from "../component/Productcard";
import { products } from "../data/items";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
};

export default Home;
