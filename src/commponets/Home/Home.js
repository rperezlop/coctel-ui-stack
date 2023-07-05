import CocktailList from "../Cocktail";
import Nav from "../Nav/Nav";
import {Container} from "@mui/material";

const Home = () => {
  return (
    <>
      <Nav/>
      <Container maxWidth="xl">
        <CocktailList/>
      </Container>
    </>
  )
}
export default Home;