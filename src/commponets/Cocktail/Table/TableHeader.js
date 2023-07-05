const tableHeaderMain = [
  {
    name: 'Nombre',
    selector: 'strDrink',
    sortable: true,
  },
  {
    name: 'Categoría',
    selector: 'strCategory',
    sortable: true,
  },
  {
    name: 'Vaso',
    selector: 'strGlass',
    sortable: true,
  },
  {
    name: 'Instrucciones',
    selector: 'strInstructionsES',
    wrap: true,
  },
  {
    name: 'Ingredientes',
    selector: 'strIngredient1',
    wrap: true,
  },
  {
    name: 'Imagen',
    cell: (row) => <img src={row.strDrinkThumb} alt={row.strDrink}
                        style={{width: '80px', height: 'auto'}}/>,
  },
];

export default tableHeaderMain;


