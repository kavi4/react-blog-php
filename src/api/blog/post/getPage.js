const GetPage = ({page,pageSize,action})=>{

/*
	let data = new FormData();
	data.append( "json", JSON.stringify({page:page,pageSize:pageSize}));
	fetch('/api/post/getPage.php', {  
    method: 'POST',
    credentials: 'same-origin',
    body: data,
  	})
  	.then((response)=>{return response.json();})
  	.then(function (data) {
    	action(data);
  	})  
  	.catch(function (error) {  
    console.log('Request failed', error); 
  	});*/
    if(page==1)
    {
      setTimeout(()=>{action({posts:[{id:1,title:"text",content_preview:"ergerg"}],pagination:{total:2,currentPage:1},errors:[],auth:true})},1000);
    }else{
      setTimeout(()=>{action({posts:[{id:2,title:"trrtkuk",content_preview:"yuktyktyuk"}],pagination:{total:2,currentPage:2},errors:[],auth:true})},1000);
    }
    
}

export default GetPage;

