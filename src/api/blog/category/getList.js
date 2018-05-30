const getList = ({action})=>{
	
/*
	fetch('/api/category/getList.php', {  
    method: 'POST',
    credentials: 'same-origin',
  	})
  	.then((response)=>{return response.json();})
  	.then(function (data) {  
    	action(data);
  	})  
  	.catch(function (error) {  
    console.log('Request failed', error); 
  	});*/
        setTimeout(()=>{action({categoryes:[{title:"new",id:2},{title:"last",id:3}],auth:true, errors:[]})},2000);

}

export default getList;