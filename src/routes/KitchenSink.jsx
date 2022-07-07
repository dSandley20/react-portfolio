import DisplayCard from "../components/DisplayCard";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";
import Socials from "../components/Socials";
import { Grid, Item } from "@mui/material";

export default function KitchenSink() {
  return (
    <>
      <NavBar />
      {/* 
      <Grid container spacing={4}>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip1"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
        <Grid item xs={4} sx={{ width: "30%" }}>
          <DisplayCard
            title={"FireShip2"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, asperiores."
            }
          />
        </Grid>
      </Grid> */}

      {/* <ContactMe /> */}
    </>
  );
}
