import {useState, useEffect} from 'react';
import {getCocktailList} from '../../utils/getApi';
import DataTable from 'react-data-table-component';
import tableHeaderMain from './Table/TableHeader';
import {Container, Stack} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const CocktailList = () => {

  const [cocktails, setCocktails] = useState([])
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getCocktailList(setCocktails);
  }, []);

  const newDataCocktails = cocktails.map((cocktail) => {
    return {
      strDrink: cocktail?.strDrink,
      strCategory: cocktail?.strCategory,
      strGlass: cocktail?.strGlass,
      strInstructionsES: cocktail?.strInstructionsES,
      strIngredient1: cocktail?.strIngredient1,
      strDrinkThumb: cocktail?.strDrinkThumb
    }
  })

  const handleSearchTermChange = (e) => {
    setSearchName(e.target.value);
  };

  const filteredCocktails = newDataCocktails.filter((cocktail) =>
    cocktail.strDrink.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <Container maxWidth="xl">
        <Toolbar sx={{display: 'flex'}}>
          <Stack spacing={2} direction="row" sx={{flexGrow: 1, paddingTop: 1}}>
            <label htmlFor="searchInput">Buscar por nombre: </label>
            <input
              type="text"
              id="searchInput"
              value={searchName}
              onChange={handleSearchTermChange}
            />
          </Stack>
        </Toolbar>
        <DataTable
          columns={tableHeaderMain}
          data={filteredCocktails ? filteredCocktails : null}
          title="Listado de cócteles"
          pagination
          responsive
        />
      </Container>
    </>
  )
}

export default CocktailList;
