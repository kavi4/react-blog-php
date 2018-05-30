const Login = ({loginInfo,action})=>{

	let data = new FormData();
	data.append( "json", JSON.stringify(loginInfo));

	fetch('/api/user/login.php', {  
    method: 'POST',  
    credentials: 'same-origin',
    body: data,
  	})
  	.then((response)=>{return response.json();})
  	.then(function (data) {  
  	})  
  	.catch(function (error) {  
    console.log('Request failed', error); 
  	});

   // setTimeout(()=>{action({logined:false,errors:[{text:"need unique email"},{text:"wrong password"}]});},1000);
}
export default Login;