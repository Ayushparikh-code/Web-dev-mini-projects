import React from 'react'
import {
	Box,
	TextField,
	makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
	component: {
		backgroundColor: '#F6F6F6',
		'& > *': {
			margin: theme.spacing(2)
		}

	}
}))

const BreadCrumb = ({
	onTextChange,
	onCountChange
}) => {
	const classes = useStyle();
	return ( <
		Box className = {
			classes.component
		} >
		<
		TextField label = "Search images"
		onChange = {
			(e) => onTextChange(e.target.value)
		}
		/>

		<
		TextField label = "Number of Images"
		onChange = {
			(e) => onCountChange(e.target.value)
		}
		/>             
		</Box>
	)
}

export default BreadCrumb
