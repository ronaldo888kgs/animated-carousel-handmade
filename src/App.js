import "./styles.css";
import Carousels from "./components/Carousels";

const images = [
  {
    id: 1,
    src: "/assets/images/character1.png"
  },
  {
    id: 2,
    src: "/assets/images/character1.png"
  },
  {
    id: 3,
    src: "/assets/images/character1.png"
  },
  {
    id: 4,
    src: "/assets/images/character1.png"
  },
  {
    id: 5,
    src: "/assets/images/character1.png"
  },
  {
    id: 6,
    src: "/assets/images/character1.png"
  },
  {
    id: 7,
    src: "/assets/images/character1.png"
  },
  {
    id: 8,
    src: "/assets/images/character1.png"
  },
  {
    id: 9,
    src: "/assets/images/character1.png"
  },
  {
    id: 10,
    src: "/assets/images/character1.png"
  },
  {
    id: 11,
    src: "/assets/images/character1.png"
  },
  {
    id: 12,
    src: "/assets/images/character1.png"
  }
];

const breakPoint = {};
export default function App() {
  return (
    <div className="App">
      <Carousels count={7} images={images} />
    </div>
  );
}
