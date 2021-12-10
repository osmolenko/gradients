import React from 'react';
import {
	Card,
	CardActions,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const GradientItem = (props) => {
	const { colors, name } = props.gradient;
	return (
		<Card
			sx={{
				margin: '10px',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: '100',
			}}>
			<CardMedia
				sx={{
					height: '200px',
					minWidth: '380px',
					background: `linear-gradient(to right,
					${colors.map((e) => e.color).join(', ')}
					  )`,
				}}
			/>
			<CardActions
				sx={{
					padding: '5px 30px',
				}}>
				<Typography
					variant="span"
					sx={{
						flexGrow: 1,
						textAlign: 'left',
						overflow: 'hidden',
					}}>
					{name}
				</Typography>
				<IconButton color="primary" aria-label="Edit item" component="span">
					<Edit />
				</IconButton>
				<IconButton color="primary" aria-label="Delete item" component="span">
					<Delete />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default GradientItem;
