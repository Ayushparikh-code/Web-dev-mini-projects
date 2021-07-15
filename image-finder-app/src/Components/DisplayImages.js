import React from 'react'
import {
	Card,
	makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
	component: {
		height: 300,
		width: '100%',
		objectFit: 'cover',

	},
	comp: {
		padding: 5,
		margin: 5
	}
})

const DisplayImages = ({
	image
}) => {

	const classes = useStyles();

	return (

		<
		Card className = {
			classes.comp
		} >
		<
		img src = {
			image.largeImageURL
		}
		alt = "iamge"
		className = {
			classes.component
		}
		/> 
		</Card>
	)
}

export default DisplayImages
