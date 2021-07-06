import { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Header from './Components/HeaderComponents'
import Recipe from './Components/RecipeComponent'

const APP_ID = "f60b9793";
const APP_KEY = "19a58f8443eab284d64fd920db74c380";
// https://www.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}

const Container = styled.div`
display:flex;
flex-direction: column;
`;

// styling of table using material-ui
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


//  placeholder component

const Placeholder = styled.img`
width : 350px;
height : 350px;
margin: 100px;
opacity: 50%;
`;

// recipeComponent
const RecipeComponent = (props) => {

  const mystyle = {
    width: "60px",
    height: "60px"
  };

  const [show, setShow] = useState(false);  //dialog
  // console.log(props);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show} >
        <DialogTitle id="alert-dialog-slide-title">Ingredients List</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="right">Food Category</StyledTableCell>
                <StyledTableCell align="right">Ingredients</StyledTableCell>
                <StyledTableCell align="right">Weight</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipeObj.ingredients.map((ingredientObj) =>
                <TableRow>
                  <StyledTableCell><img src={ingredientObj.image} alt={ingredientObj.foodCategory} style={mystyle} /></StyledTableCell>
                  <StyledTableCell>{ingredientObj.foodCategory}</StyledTableCell>
                  <StyledTableCell>{ingredientObj.text}</StyledTableCell>
                  <StyledTableCell>{ingredientObj.weight}</StyledTableCell>
                </TableRow>
              )}

            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>

          <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientsText>
          <Recipe.SeeMoreText onClick={() => setShow(false)}>Close</Recipe.SeeMoreText>

        </DialogActions>
      </Dialog>

      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setShow(true)}>Ingredients</Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)} >See Complete Recipe</Recipe.SeeMoreText>
      </Recipe.RecipeContainer>
    </>
  )
}


function App() {

  const [timeoutId, updateTimeoutID] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://www.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(response);
    updateRecipeList(response.data.hits);
  }

  const onTextChnage = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 800);
    updateTimeoutID(timeout);

  }

  return (
    <Container>
      <Header.HeaderComponent>
        <Header.AppNameComponent>
          <Header.AppIcon src="/logo.svg" />
          Recipe Finder
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchImage src="/search-icon.svg" />
          <Header.SearchInput placeholder="Search Recipe" onChange={onTextChnage} />
        </Header.SearchComponent>
      </Header.HeaderComponent>

      <Recipe.RecipeListContainer>
        {recipeList.length ? recipeList.map((recipeObject) => (
          <RecipeComponent recipeObj={recipeObject.recipe} />
        )
        ) : <Placeholder src="/recipe.png" />}



      </Recipe.RecipeListContainer>

    </Container>
  );
}

export default App;

