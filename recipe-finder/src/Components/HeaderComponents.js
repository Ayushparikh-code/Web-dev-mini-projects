import styled from 'styled-components'

const HeaderComponent = styled.div`
color : white;
background-color: #48cae4;
display : flex;
flex-direction: row;
align-items:center;
padding: 10px;
font-size : 25px;
font-weight : bold;
box-shadow : 0 3px 6px 0 #555;
justify-content : space-between;

` ;

const AppNameComponent = styled.div`
display : flex;
color: #370617;
align-items: center;
`;

const AppIcon  = styled.img`
width : 50px;
height : 50px;
margin :10px;

`;

const SearchComponent = styled.div`
display : flex;
flex-direction: row;
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


