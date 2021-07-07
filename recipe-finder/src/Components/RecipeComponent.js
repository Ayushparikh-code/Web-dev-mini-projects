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
padding:20px;
width :300px;
box-shadow : 0 3px 10px 0 #aaa;
border-radius:25px;
// border: 1px solid #00b4d8;
`;

const CoverImage = styled.img`
height : 200px;
border-radius:15px;

`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: monospace;
  color: #003566;
  margin : 20px 0;
`;

const IngredientsText = styled.span`
  font-size: 18px;
  border :  1px solid #06d6a0;
  margin-bottom : 12px;
  curson : pointer;
  padding:10px 15px;
  border-radius: 4px;
  color: #06d6a0;
  text-align: center;
  cursor: pointer
`;

const SeeMoreText = styled(IngredientsText)`
color: #ff006e;
border : 1px solid #ff006e;
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

