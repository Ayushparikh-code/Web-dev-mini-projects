import React from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles
} from '@material-ui/core'
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyle = makeStyles({
	component: {
		backgroundColor: '#445A6F',
	}
})

const Navbar = () => {
	const classes = useStyle();
	return ( <
		AppBar className = {
			classes.component
		}
		position = 'static' >
		<
		Toolbar >
		<
		CollectionsIcon / >
		<
		Typography variant = "h5"
		style = {
			{
				marginLeft: 10
			}
		} >
		Image Finder 
		</Typography> 
		</Toolbar> 
		</AppBar>
	)
}

export default Navbar
