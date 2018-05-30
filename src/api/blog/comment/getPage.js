const GetPage = ({page,post,pageSize,action})=>{

    if(page==1){
        setTimeout(()=>{ 
        action(
        {
          auth:true,
          comments:[
          {id:1,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 1",created:"10 2 2015",postId:1},
          {id:2,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 1",created:"10 2 2015",postId:1},
          ],
          pagination:{total:8,currentPage:1},
        })},1000);
    }
    if(page==2){
        setTimeout(()=>{ 
        action(
        {
          auth:true,
          comments:[
          {id:3,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 2",created:"10 2 2015",postId:1},
          {id:4,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 2",created:"10 2 2015",postId:1},
          ],
          pagination:{total:8,currentPage:2},
        })},1000);
    }

    if(page==3){
        setTimeout(()=>{ 
        action(
        {
          auth:true,
          comments:[
          {id:5,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 3",created:"10 2 2015",postId:1},
          {id:6,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 3",created:"10 2 2015",postId:1},
          ],
          pagination:{total:8,currentPage:3},
        })},1000);
    }

    if(page==4){
        setTimeout(()=>{ 
        action(
        {
          auth:true,
          comments:[
          {id:7,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 4",created:"10 2 2015",postId:1},
          {id:8,user:{id:12,avatar:"img.jpg",name:"Kavi4"},content:"Lorem text 4",created:"10 2 2015",postId:1},
          ],
          pagination:{total:8,currentPage:4},
        })},1000);
    }

}

export default GetPage;

