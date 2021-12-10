import React from 'react';
import { Box } from '@mui/material';
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
				<EditForm />
			</Box>
		);
	}
}
