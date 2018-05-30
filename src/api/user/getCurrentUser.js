const getCurrentUser = ({action})=>{
/*
	fetch('/api/user/login.php')
  	.then((response)=>{return response.json();})
  	.then(function (data) {  
    	action(data);
  	})  
  	.catch(function (error) {  
    console.log('Request failed', error); 
  	});*/

    setTimeout(()=>{action({user:{avatar:"/images/kitty.jpg",name:"Kavi4"},errors:{}});},1000);
}

export default getCurrentUser;