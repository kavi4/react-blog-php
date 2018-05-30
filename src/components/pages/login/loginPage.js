import React from 'react';
import './style.css';

import Header from '../../header';
import Footer from '../../footer';
import LoginFormContainer from '../../../containers/loginFormContainer';

const LoginPage = ()=>{
	return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="login-form-position">
							<div className="login-form-wrapper">
								<LoginFormContainer/>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default LoginPage;