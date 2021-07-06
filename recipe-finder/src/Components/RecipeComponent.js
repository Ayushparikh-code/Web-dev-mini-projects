import styled from 'styled-components'

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
padding:30px;
justify-content: space-evenly;
flex-wrap : wrap;
gap: 20px
`;

const RecipeContainer = styled.div`
display : flex;
flex-direction : column;
padding:10px;
width :300px;
box-shadow : 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
height : 200px;

`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin : 10px 0;
`;

const IngredientsText = styled.span`
  font-size: 18px;
  border :  1px solid green;
  margin-bottom : 12px;
  curson : pointer;
  padding:10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  cursor: pointer
`;

const SeeMoreText = styled(IngredientsText)`
color: red;
border : 1px solid red;
cursor: pointer
`;

export default {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText
};

