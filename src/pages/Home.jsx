import React from 'react';
import { Box } from '@mui/material';
import GradientItem from '../components/GradientItem';
import { connect } from 'react-redux';

class Home extends React.Component {
	render() {
		const { gradients } = this.props;

		return (
			<Box
				className="App"
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}>
				{gradients.map((gradient, index) => (
					<GradientItem key={index} gradient={gradient} />
				))}
			</Box>
		);
	}
}

export default connect(
	({ gradients }) => ({
		gradients,
	}),
	{}
)(Home);
