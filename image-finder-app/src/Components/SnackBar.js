import {
	Snackbar,
	makeStyles
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


const useStyle = makeStyles({
	component: {
		'& > *': {
			color: '#fff',
			backgroundColor: '#000000'
		}
	}
})

const SnackBar = ({
	open,
	toggleSnack
}) => {

	const handleClose = () => {
		toggleSnack(false)
	};

	const classes = useStyle();

	return ( 
		<Snackbar open = {
			open
		}
		autoHideDuration = {
			3000
		}
		onClose = {
			handleClose
		}
		className = {
			classes.component
		} >
		<
		MuiAlert severity = "info"
		onClose = {
			handleClose
		} >
		Number of Images should be between 3 and 200 
		</MuiAlert> 
		</Snackbar>
	)
}

export default SnackBar;
