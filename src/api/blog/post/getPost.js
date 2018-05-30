const GetPost = ({id,action})=>{

/*
	let data = new FormData();
	data.append( "json", JSON.stringify({id:id}));

	fetch('/api/user/login.php', {  
    method: 'POST',
    headers: {},
    body: data,
  	})
  	.then((response)=>{return response.json();})
  	.then(function (data) {  
    	action({data});
  	})  
  	.catch(function (error) {  
    console.log('Request failed', error); 
  	});*/
    if(id==1){
          setTimeout(()=>{ action({auth:true,post:{id:1,user:{avatar:"img.jsg"},created:"15 04 2015",image:"images/post.jpg",category:"Updates",title:"ES6 OUt",content:"content"}}); },1000)
    }

    if(id==2){
                setTimeout(()=>{ action({auth:true,post:{id:2,user:{avatar:"img.jsg"},created:"15 04 2015",image:"images/post.jpg",category:"Updates",title:"ES7 OUt",content:"content"}}); },1000)

    }
}

export default GetPost;