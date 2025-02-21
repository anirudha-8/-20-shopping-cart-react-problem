import "./App.css";

function App() {
	const products = [
		{ id: 1, name: "Product A" },
		{ id: 2, name: "Product B" },
		{ id: 3, name: "Product C" },
		{ id: 4, name: "Product D" },
	];
	const addToCart = (product) => {};
	return (
		<div>
			<h1>Shopping Cart</h1>
			<h2>Products</h2>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.id}>
							{product.name}{" "}
							<button onClick={() => addToCart(product)}>Add To Cart</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
