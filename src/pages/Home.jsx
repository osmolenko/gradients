import React from 'react';
import { Box } from '@mui/material';
import GradientItem from '../components/GradientItem';
import { connect } from 'react-redux';

class Home extends React.Component {
	render() {
		const { list } = this.props;
		return (
			<Box
				className="App"
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}>
				{list.map((gradient, index) => (
					<GradientItem key={gradient.id} gradient={gradient} />
				))}
			</Box>
		);
	}
}

export default connect(
	({ gradients: { list } }) => ({
		list,
	}),
	null
)(Home);
