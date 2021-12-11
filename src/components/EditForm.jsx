import React from 'react';
import { FieldArray, Form, getIn, Formik } from 'formik';
import * as yup from 'yup';
import {
	Button,
	Divider,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { connect } from 'react-redux';
import {
	addNewItem,
	changeCurrent,
	clearCurrent,
	modifyItem,
} from '../actions/gradient';

class EditForm extends React.Component {
	componentDidMount() {
		this.props.changeCurrent(this.props.id);
	}

	componentWillUnmount() {
		this.props.clearCurrent();
	}

	render() {
		const { current, id } = this.props;
		const { navigate, addNewItem, modifyItem } = this.props;

		const initial = {
			id: Math.random() * 100,
			name: 'New color',
			colors: [
				{
					id: Math.random() * 100,
					color: '#fff',
				},
				{
					id: Math.random() * 100,
					color: '#aeaeae',
				},
			],
		};

		const validationSchema = yup.object().shape({
			name: yup
				.string('Enter correct name')
				.min(2)
				.required('Name is required'),
			colors: yup
				.array('Must be an array')
				.min(2)
				.of(
					yup.object().shape({
						id: yup.number(),
						color: yup
							.string()
							.matches(
								/^#([0-9a-f]{3}|[0-9a-f]{6})$/i,
								'Must be a HEX color code'
							)
							.required('Color is required'),
					})
				),
		});

		return (
			<Formik
				initialValues={current || initial}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					if (id) {
						modifyItem(values);
					} else {
						addNewItem(values);
					}
					navigate();
				}}
				enableReinitialize>
				{({ values, touched, errors, handleChange, handleBlur, isValid }) => {
					const touchedName = getIn(touched, 'name');
					const errorName = getIn(errors, 'name');
					return (
						<Form noValidate autoComplete="off">
							<FormControl fullWidth error={Boolean(touchedName && errorName)}>
								<InputLabel htmlFor="name">Name</InputLabel>
								<OutlinedInput
									id="name"
									name="name"
									value={values.name}
									onChange={handleChange}
									label="Name"
								/>
								<FormHelperText>
									{touchedName && errorName ? errorName : ''}
								</FormHelperText>
							</FormControl>
							<Divider />
							<FieldArray name="colors">
								{({ push, remove }) => (
									<>
										{values.colors.map((c, index) => {
											const currentColor = `colors[${index}].color`;
											const touchedCurrentColor = getIn(touched, currentColor);
											const errorCurrentColor = getIn(errors, currentColor);

											return (
												<FormControl
													fullWidth
													error={Boolean(
														touchedCurrentColor && errorCurrentColor
													)}
													key={c.id}
													margin="dense">
													<InputLabel htmlFor={currentColor}>Color</InputLabel>
													<OutlinedInput
														name={currentColor}
														value={c.color}
														onChange={handleChange}
														onBlur={handleBlur}
														label={currentColor}
														endAdornment={
															<InputAdornment position="end">
																<IconButton
																	aria-label={`remove ${c.color} color from list`}
																	edge="end"
																	onClick={() => remove(index)}
																	sx={{
																		display:
																			values.colors.length <= 2
																				? 'none'
																				: 'inherit',
																	}}>
																	<Close color="error" />
																</IconButton>
															</InputAdornment>
														}
													/>
													<FormHelperText>
														{touchedCurrentColor && errorCurrentColor
															? errorCurrentColor
															: ''}
													</FormHelperText>
												</FormControl>
											);
										})}
										<Button
											type="button"
											variant="outlined"
											onClick={() =>
												push({
													id: Math.random(),
													color: '#aeaeae',
												})
											}
											sx={{
												marginRight: '10px',
											}}>
											Add 1 more color
										</Button>
									</>
								)}
							</FieldArray>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								disabled={!isValid || values.colors.length === 0}>
								{id ? 'modify' : 'submit'}
							</Button>
						</Form>
					);
				}}
			</Formik>
		);
	}
}

export default connect(
	({ gradients: { current } }) => ({
		current,
	}),
	{ changeCurrent, clearCurrent, addNewItem, modifyItem }
)(EditForm);
