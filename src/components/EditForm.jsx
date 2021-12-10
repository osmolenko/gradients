import React from 'react';
import { FieldArray, Form, getIn, Formik } from 'formik';
import * as yup from 'yup';
import {
	Button,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const EditForm = () => {
	const validationSchema = yup.object().shape({
		name: yup.string('Enter correct name').min(8).required('Name is required'),
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
						),
				})
			),
	});

	return (
		<Formik
			initialValues={{
				name: 'Nice new color',
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
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values));
			}}>
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
												key={c.id}>
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
																<Close color="secondary" />
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
										}>
										Add
									</Button>
								</>
							)}
						</FieldArray>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							disabled={!isValid || values.colors.length === 0}>
							submit
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default EditForm;
