export default function Product({ product }) {
  const { category, description, images, price, title } = product;

  return (
    <div>
      <div>
        <img src={images[0]} alt={description} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-bold">Title: </span>
          <span>{title}</span>
        </div>
        <div>
          <span className="font-bold">Description: </span>
          <span>{description}</span>
        </div>
        <div>
          <span className="font-bold">Price: </span>
          <span>{price}$</span>
        </div>
        <div>
          <span className="font-bold">Category: </span>
          <span>{category.name}</span>
        </div>
      </div>
    </div>
  );
}
