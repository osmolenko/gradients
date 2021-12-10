import React from 'react';
import {Box} from "@mui/material";
import GradientItem from "../components/GradientItem";

export default class Home extends React.Component {
	render(){
		return(
			<Box className="App" sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around'
			}}>
				<GradientItem/>
				<GradientItem/>
				<GradientItem/>
				<GradientItem/>
				<GradientItem/>
			</Box>
		)
	}
}