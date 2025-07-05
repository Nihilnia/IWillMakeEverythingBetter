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
  },
  {
    id: 2,
    name: "Bigos",
    description:
      "A traditional Polish stew made with sauerkraut, fresh cabbage, various cuts of meat, and sausages.",
    image: bigosImage,
  },
  {
    id: 3,
    name: "Rosół",
    description: "A clear chicken soup, often served with fine noodles.",
    image: rosolImage,
  },
  {
    id: 4,
    name: "Żurek",
    description: "A sour rye soup, often containing sausage, egg, and potatoes.",
    image: zurekImage,
  },
];

export default foodList;
