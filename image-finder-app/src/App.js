import {
	useEffect,
	useState
} from 'react';

// import from material/ui
import {
	Box
} from '@material-ui/core'

//  components
import Navbar from './Components/Navbar'
import BreadCrumb from './Components/BreadCrumb';
import Image from './Components/Image'
import SnackBar from './Components/SnackBar';

import {
	getImages
} from './Services/api'

function App() {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(10);
	const [text, setText] = useState("mountains");
	const [open, toggleSnack] = useState(false);

	useEffect(() => {

		if (count < 3 || count > 200) {
			toggleSnack(true);
			return;
		}

		toggleSnack(false);

		getImages(text, count).then(response => {
			setData(response.data.hits)
			// console.log(response.data.hits);
		})
	}, [text, count])


	const onTextChange = (text) => {
		setText(text);
	}


	const onCountChange = (count) => {
		setCount(count);
	}

	return ( 
		<Box >
		<Navbar / >
		<BreadCrumb onTextChange = {
			onTextChange
		}
		onCountChange = {
			onCountChange
		}
		/> 
		<Image data = {
			data
		}
		/> 
		<SnackBar open = {
			open
		}
		toggleSnack = {
			toggleSnack
		}
		/> 
		</Box>
	);
}

export default App;
