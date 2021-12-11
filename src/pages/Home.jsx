import React from 'react';
import { Box, Container, Fab, Typography } from '@mui/material';
import GradientItem from '../components/GradientItem';
import { connect } from 'react-redux';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		const { list } = this.props;
		return (
			<>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						maxWidth: '400px',
						margin: '15px auto',
						textAlign: 'center',
						gap: '10px',
					}}>
					<Typography variant="h4">Gradient lister and editor</Typography>
					<Link to="/new">
						<Fab
							variant="extended"
							color="primary"
							aria-label="add new gradient">
							<Add />
							Add new gradient
						</Fab>
					</Link>
				</Box>
				<Container
					className="App"
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
					}}>
					{list.map((gradient, index) => (
						<GradientItem key={gradient.id} gradient={gradient} />
					))}
				</Container>
			</>
		);
	}
}

export default connect(
	({ gradients: { list } }) => ({
		list,
	}),
	null
)(Home);
