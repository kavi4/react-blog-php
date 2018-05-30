import history from '../store/history';


const checkAuth = (auth)=>
{
	if(!auth){history.push({ pathname: '/login' })}
}

export default checkAuth;