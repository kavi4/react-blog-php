import React                 from 'react';
import ReactDOM              from 'react-dom';
import {Provider}            from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route ,Switch}  from 'react-router-dom';

import './static/css/bootstrap.css';
import './static/fonts/font-awesome.css';
import './static/css/main.css';

import Store   from './store';
import History from './store/history';

import BlogPage     from './components/pages/blog';
import ContactsPage from './components/pages/contacts';
import AboutPage    from './components/pages/about';
import NotFoundPage from './components/pages/notFound';
import UserPage     from './components/pages/user';
//import LoginPage    from './components/pages/login';

import * as dom from 'react-router-dom';

ReactDOM.render(
	<Provider store = {Store}>
		<Router history = {History}>
			<Switch>
				<Route exact path = "/"       component = {BlogPage}/>
				<Route path = "/blog"         component = {BlogPage}/>

			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();


/*


				<Route path = "/login"        component = {LoginPage}/>
				<Route path = "/contacts"     component = {ContactsPage}/>
				<Route path = "/about"        component = {AboutPage}/>
				<Route path = "/user/:id"     component = {UserPage}/>
				<Route                        component = {NotFoundPage} />
 */
