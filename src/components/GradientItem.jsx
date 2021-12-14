import React from 'react';
import {
	Card,
	CardActions,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/gradient';

const GradientItem = (props) => {
	const { colors, name, id } = props.gradient;
	const { deleteItem } = props;
	const navigate = useNavigate();

	function editHandler(id) {
		navigate(`/edit/${id}`);
	}

	function deleteHandler(id) {
		deleteItem(id);
	}

	return (
		<Card
			data-testid="CardContainer"
			sx={{
				margin: '10px',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: '100',
			}}>
			<CardMedia
				data-testid="CardColor"
				component="div"
				sx={{
					height: '200px',
					minWidth: '380px',
					background: `linear-gradient(to right,
					${colors.map((e) => e.color).join(', ')}
					  )`,
				}}
			/>
			<CardActions
				data-testid="CardActions"
				sx={{
					padding: '5px 30px',
				}}>
				<Typography
					data-testid="CardName"
					variant="span"
					sx={{
						flexGrow: 1,
						textAlign: 'left',
						overflow: 'hidden',
					}}>
					{name}
				</Typography>
				<IconButton
					data-testid="CardEditButton"
					color="primary"
					aria-label="Edit item"
					component="span"
					onClick={() => editHandler(id)}>
					<Edit />
				</IconButton>
				<IconButton
					data-testid="CardDeleteButton"
					color="primary"
					aria-label="Delete item"
					component="span"
					onClick={() => deleteHandler(id)}>
					<Delete />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default connect(null, { deleteItem })(GradientItem);
