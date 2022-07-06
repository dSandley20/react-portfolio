import DisplayCard from "../components/DisplayCard";
import NavBar from "../components/NavBar";

export default function KitchenSink() {
  return (
    <>
      <NavBar />
      <DisplayCard
        title={"FireShip"}
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
        }
      />
    </>
  );
}
