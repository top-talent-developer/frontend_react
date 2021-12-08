import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useForm } from '@fuse/hooks';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as authActions from 'app/auth/store/actions';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function JWTLoginTab(props) {
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth.login);

	const [isFormValid, setIsFormValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const formRef = useRef(null);

	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error
			});
			disableButton();
		}
	}, [login.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(authActions.submitLogin(model));
	}


	const { form, handleChange } = useForm({
		email: '',
		password: '',
		remember: false
	});

	return (
		<div className="w-full">
			<Formsy
				onValidSubmit={handleSubmit}
				onValid={enableButton}
				onInvalid={disableButton}
				ref={formRef}
				className="flex flex-col justify-center w-full"
			>
				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="email"
					label="Username/Email"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password"
					label="Password"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						className: 'pr-2',
						type: showPassword ? 'text' : 'password',
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									<Icon className="text-20" color="action">
										{showPassword ? 'visibility' : 'visibility_off'}
									</Icon>
								</IconButton>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<div className="flex items-center justify-between w-full">
					<FormControl>
						<FormControlLabel
							control={
								<Checkbox
									name="remember"
									checked={form.remember}
									onChange={handleChange}
								/>
							}
							label="Remember Me"
						/>
					</FormControl>

					<Link className="font-medium" to="/pages/auth/forgot-password">
						Forgot Password?
					</Link>
				</div>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16 normal-case lg:h-48"
					aria-label="LOG IN"
					style={{ backgroundColor: '#4f46e5', borderRadius: '5rem' }}
					disabled={!isFormValid}
					value="legacy"
				>
					Sign in
				</Button>

				<div className="my-24 flex items-center justify-center">
					<Divider className="w-80" />
					<span className="mx-8 font-bold">Or continus with</span>
					<Divider className="w-80" />
				</div>
				<div className="flex justify-between w-full">
					<Button variant="outlined" className="h-40 w-92 rounded-16">
						<svg className="icon-color lg:p-4" x="48" y="192" viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
							<path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1v0h3z">
							</path>
						</svg>
					</Button>
					<Button variant="outlined" className="h-40 w-92 rounded-16">
						<svg className="icon-color lg:p-4" x="432" y="480" viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
							<path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" d="M23 3c-.9.642-1.943 1.164-3.063 1.509l-.077.021A4.48 4.48 0 0012 7.47v.063-.003 1a10.646 10.646 0 01-8.977-4.496l-.022-.033s-4 9 5 13A11.54 11.54 0 01.978 19l.023.001c9 5 20 0 20-11.5a4.5 4.5 0 00-.085-.859l.005.029a7.717 7.717 0 002.069-3.617l.011-.053z"></path>
						</svg>
					</Button>
					<Button variant="outlined" className="h-40 w-92 rounded-16">
						<svg className="icon-color lg:p-4" x="1056" y="192" viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
							<path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.36 3.36 0 00-.941-2.611l.001.001c3.14-.35 6.44-1.54 6.44-7a5.422 5.422 0 00-1.502-3.752L20 4.77a4.97 4.97 0 00.32-1.773c0-.722-.151-1.408-.423-2.03L19.91 1S18.73.65 16 2.48c-1.05-.296-2.255-.466-3.5-.466s-2.45.17-3.594.488L9 2.48C6.27.65 5.09 1 5.09 1a4.992 4.992 0 00-.41 1.997c0 .637.117 1.246.332 1.807L5 4.769A5.418 5.418 0 003.5 8.52v.03-.002c0 5.42 3.3 6.61 6.44 7a3.357 3.357 0 00-.939 2.591L9 18.128v3.87"></path>
						</svg>
					</Button>
				</div>
			</Formsy>

			{/* <div className="flex flex-col items-center pt-24">
				<Typography className="text-14 font-600 py-8">Credentials</Typography>

				<Divider className="mb-16 w-256" />

				<table className="text-left w-256">
					<thead>
						<tr>
							<th>
								<Typography className="font-600" color="textSecondary">
									Role
								</Typography>
							</th>
							<th>
								<Typography className="font-600" color="textSecondary">
									Username
								</Typography>
							</th>
							<th>
								<Typography className="font-600" color="textSecondary">
									Password
								</Typography>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Typography>Admin</Typography>
							</td>
							<td>
								<Typography>admin</Typography>
							</td>
							<td>
								<Typography>admin</Typography>
							</td>
						</tr>
						<tr>
							<td>
								<Typography>Staff</Typography>
							</td>
							<td>
								<Typography>staff</Typography>
							</td>
							<td>
								<Typography>staff</Typography>
							</td>
						</tr>
					</tbody>
				</table>
			</div> */}
		</div>
	);
}

export default JWTLoginTab;
