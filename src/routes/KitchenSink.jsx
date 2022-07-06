import DisplayCard from "../components/DisplayCard";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import Socials from "../components/Socials";
import { Grid, Item } from "@mui/material";

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

      <ContactMe />
    </>
  );
}
