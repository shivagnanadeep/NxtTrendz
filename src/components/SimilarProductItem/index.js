import './index.css';
const SimilarProductItem = (props) => {
	const { productDetails } = props;
	const { imageUrl, title, price, rating, brand } = productDetails;
	return (
		<div className="similar-product-item-container">
			<img
				src={imageUrl}
				alt={`similar product ${title}`}
				className="similar-product-image"
			/>
			<h1 className="similar-product-title">{title}</h1>
			<p className="similar-product-brand">{`by ${brand}`}</p>
			<div className="cost-and-rating-container">
				<p className="similar-product-price">{`Rs ${price}/-`}</p>
				<div className="similar-product-rating-container">
					<p>{rating}</p>
					<img
						src="https://assets.ccbp.in/frontend/react-js/star-img.png"
						alt="star"
						className="similar-product-star"
					/>
				</div>
			</div>
		</div>
	);
};
export default SimilarProductItem;
