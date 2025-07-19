export default function MealCard({ meal }) {
  const { id, name, price, description, image } = meal;

  return (
    <div>
      id: {id}
      name: {name}
      price: {price}
      description: {description}
      image: {image}
    </div>
  );
}
