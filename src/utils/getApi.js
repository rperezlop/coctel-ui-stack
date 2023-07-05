import axios from 'axios';

const getCocktailList = async (setCocktails) => {
  try {
    const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    setCocktails(data.drinks)
  } catch (error) {
    console.error(error);
  }
};

export {getCocktailList}




