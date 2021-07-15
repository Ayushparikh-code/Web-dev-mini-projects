import {
	Grid
} from '@material-ui/core';

import DisplayImages from './DisplayImages';

const Image = ({
	data
}) => {
	// console.log("data",data);
	return ( <
		Grid container > {
			data.map(image => ( <
				Grid xs = {
					3
				}
				item key = {
					image.id
				} > < DisplayImages image = {
					image
				}
				/>  </Grid >
			))

		} 
		</Grid>
	)
}

export default Image
