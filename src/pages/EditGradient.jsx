import React from 'react';
import { Box, Typography } from '@mui/material';
import EditForm from '../components/EditForm';

export default class NewGradient extends React.Component {
	render() {
		return (
			<Box
				className="App"
				sx={{
					padding: '20px',
					maxWidth: '600px',
					margin: '0 auto',
				}}>
				<Typography
					variant="h3"
					sx={{
						textAlign: 'center',
					}}>
					Add new gradient
				</Typography>
				<EditForm />
			</Box>
		);
	}
}
