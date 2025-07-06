import pierogiImage from "../assets/foods/pierogi.png";
import bigosImage from "../assets/foods/bigos.png";
import rosolImage from "../assets/foods/rosol.png";
import zurekImage from "../assets/foods/zurek.png";

const foodList = [
  {
    id: 1,
    name: "Pierogi",
    description: "Dumplings filled with various fillings like potato and cheese, meat, or fruit.",
    image: pierogiImage,
    price: 10,
    details: {
      ingredients: "Flour, eggs, water, potato, cheese, various meats or fruits.",
      preparationTime: "About 45 minutes.",
      dietary: "Can be vegetarian depending on filling.",
      history:
        "Pierogi are one of the most recognizable Polish dishes, often served during holidays and special occasions.",
    },
  },
  {
    id: 2,
    name: "Bigos",
    description:
      "A traditional Polish stew made with sauerkraut, fresh cabbage, various cuts of meat, and sausages.",
    image: bigosImage,
    price: 20,
    details: {
      ingredients:
        "Sauerkraut, fresh cabbage, pork, beef, kielbasa sausage, mushrooms, prunes, spices.",
      preparationTime: "Several hours, often prepared over two days.",
      dietary: "Contains meat.",
      history:
        "Also known as 'hunter's stew,' Bigos is a hearty and flavorful dish, traditionally eaten in Poland, Lithuania, and Ukraine.",
    },
  },
  {
    id: 3,
    name: "Rosół",
    description: "A clear chicken soup, often served with fine noodles.",
    image: rosolImage,
    price: 30,
    details: {
      ingredients: "Chicken, vegetables (carrots, celery, parsley root), noodles, spices.",
      preparationTime: "About 2 hours.",
      dietary: "Gluten-free without noodles.",
      history:
        "Rosół is a staple in Polish cuisine, often served as a first course for Sunday dinners or special occasions.",
    },
  },
  {
    id: 4,
    name: "Żurek",
    description: "A sour rye soup, often containing sausage, egg, and potatoes.",
    image: zurekImage,
    price: 40,
    details: {
      ingredients: "Rye sourdough, white sausage, boiled egg, potatoes, marjoram, garlic.",
      preparationTime: "About 1 hour.",
      dietary: "Contains meat and gluten.",
      history:
        "Żurek is a traditional Polish soup known for its distinctive sour taste, often served during Easter.",
    },
  },
];

export default foodList;
