import React from 'react';
import { Box, Typography } from '@mui/material';
import EditForm from '../components/EditForm';
import { useNavigate, useParams } from 'react-router-dom';

function EditGradient() {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<Box
			component="section"
			sx={{
				padding: '20px',
				maxWidth: '600px',
				margin: '0 auto',
			}}>
			<Typography
				data-testid="EditHeading"
				variant="h3"
				sx={{
					textAlign: 'center',
				}}>
				{!id ? 'Add new gradient' : 'Edit gradient'}
			</Typography>
			<EditForm id={id} navigate={() => navigate('/')} />
		</Box>
	);
}

export default EditGradient;
