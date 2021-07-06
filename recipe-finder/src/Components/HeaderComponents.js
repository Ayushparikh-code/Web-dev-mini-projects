import styled from 'styled-components'

const HeaderComponent = styled.div`
color : white;
background-color: black;
display : flex;
flex-direction: row;
align-items:center;
padding: 15px;
font-size : 25px;
font-weight : bold;
box-shadow : 0 3px 6px 0 #555;
justify-content : space-between;
` ;

const AppNameComponent = styled.div`
display : flex;
align-items: center;
`;

const AppIcon  = styled.img`
width : 36px;
height : 36px;
margin :10px;
`;

const SearchComponent = styled.div`
display : flex;
flex-direction: row;
// align-items: center;
background-color :white;
padding :5px;
border-radius: 6px;
width:50%;
`;

const SearchImage = styled.img`

`;

const SearchInput = styled.input`
border: none;
outline :none;
margin-left :15px;
font-size: 18px;
font-weight: bold;
`;

// -------------another aproach;
export default {
  HeaderComponent, 
  AppNameComponent, 
  AppIcon,
  SearchComponent, 
  SearchImage, 
  SearchInput 
};


