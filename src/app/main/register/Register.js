import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import JWTRegisterTab from './tabs/JWTRegisterTab';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Register() {
	const classes = useStyles();


	return (
		<div className={clsx(classes.root, 'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0 w-full h-full')}>
			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full  mx-auto m-16 md:m-0 max-w-50 flex justify-end" square>
					<CardContent className="flex flex-col items-start justify-center p-32 md:p-64 lg:w-450">
						<img className="w-60 mb-32" src="assets/images/logos/logo.svg" alt="logo" />

						<Typography variant="h6" className="md:w-full text-4xl font-extrabold tracking-tight leading-tight ng-tns-c128-1">
							Sign up
						</Typography>
						<div className="flex flex-col items-center justify-center mb-32">
							<span className="font-medium">Already have an account?
								<Link className="font-medium pl-10" to="/login">
									Sign in
								</Link>
							</span>
						</div>
						<JWTRegisterTab />


						<div className="flex flex-col items-center" />
					</CardContent>
				</Card>
			</FuseAnimate>
			<div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left relative justify-center">
				<FuseAnimate animation="transition.expandIn">
					<svg viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 pointer-events-none ng-tns-c128-1 ">
						<g fill="none" stroke="currentColor" strokeWidth="100" className="text-gray-700 opacity-25 ng-tns-c128-1">
							<circle r="234" cx="196" cy="23" className="ng-tns-c128-1">
							</circle>
							<circle r="234" cx="790" cy="491" className="ng-tns-c128-1">
							</circle>
						</g>
					</svg>

				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn">
					<svg viewBox="0 0 220 192" width="220" height="192" fill="none" className="absolute -top-16 -right-16 text-gray-700 ng-tns-c128-1 top-1 lg:right-0 w-160">
						<defs className="ng-tns-c128-1">
							<pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" className="ng-tns-c128-1">
								<rect x="0" y="0" width="4" height="4" fill="currentColor" className="ng-tns-c128-1">
								</rect>
							</pattern>
						</defs>
						<rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" className="ng-tns-c128-1">
						</rect>
					</svg>
				</FuseAnimate>

				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light text-7xl font-bold leading-none text-gray-100 ng-tns-c128-1">
						Welcome to
					</Typography>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light text-7xl font-bold leading-none text-gray-100 ng-tns-c128-1">
						our community
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={400}>
					<Typography variant="subtitle1" color="inherit" className="my-12 text-lg tracking-tight leading-6 text-gray-400 ng-tns-c128-1">
						Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.
					</Typography>
				</FuseAnimate>
				<div className="flex items-center mt-14 ng-tns-c128-1">
					<div className="flex flex-0 items-center -space-x-1.5 ng-tns-c128-1">
						<img src="assets/images/avatars/Abbott.jpg" className="flex-0 w-44 h-44 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover ng-tns-c128-1" alt="avatar" />
						<img src="assets/images/avatars/alice.jpg" className="flex-0 w-44 h-44 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover ng-tns-c128-1" alt="avatar" />
						<img src="assets/images/avatars/vincent.jpg" className="flex-0 w-44 h-44 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover ng-tns-c128-1" alt="avatar" />
						<img src="assets/images/avatars/Katina.jpg" className="flex-0 w-44 h-44 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover ng-tns-c128-1" alt="avatar" />
					</div>
					<div className="ml-4 font-medium tracking-tight text-gray-400 ng-tns-c128-1">More than 17k people joined us, it's your turn</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
