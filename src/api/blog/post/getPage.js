
const GetPage = ({params,pageSize,action})=>{

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

  if(params)
  {
      let page = +params.page || 1;
     
      if(params.tag){
            if(page == 1)
            {
              setTimeout(()=>{action({posts:[{id:1,title:"tag",content_preview:"ergerg",tag_id:1,tag_title:"new",created:"2018-03-15"}],pagination:{total:2,currentPage:1},errors:[],auth:true})},1000);
            }else{
              setTimeout(()=>{action({posts:[{id:2,title:"tag",content_preview:"yuktyktyuk",tag_id:1,tag_title:"new",created:"2018-03-15"}],pagination:{total:2,currentPage:2},errors:[],auth:true})},1000);
            }
      }

      if(params.category){
                if(page==1)
                {
                  setTimeout(()=>{action({posts:[{id:1,title:"category",content_preview:"ergerg",category_id:1,category_title:"Updates",created:"2018-03-15"}],pagination:{total:2,currentPage:1},errors:[],auth:true})},1000);
                }else{
                  setTimeout(()=>{action({posts:[{id:2,title:"category",content_preview:"yuktyktyuk",category_id:1,category_title:"Updates",created:"2018-03-15"}],pagination:{total:2,currentPage:2},errors:[],auth:true})},1000);
                }
      }

      if(!params.tag && !params.category){
        if(page == 1)
        {
          setTimeout(()=>{action({posts:[{id:1,title:"text",content_preview:"ergerg",created:"2018-03-15"}],pagination:{total:2,currentPage:1},errors:[],auth:true})},1000);
        }else{
          setTimeout(()=>{action({posts:[{id:2,title:"trrtkuk",content_preview:"yuktyktyuk",created:"2018-03-15"}],pagination:{total:2,currentPage:2},errors:[],auth:true})},1000);
        }
      }

  }

    
}

export default GetPage;

