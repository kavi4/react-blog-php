
const GetCloud = ({action})=>{
/*
	fetch('/api/tag/getCloud.php', {  
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

    setTimeout(()=>{
      action({tags:[{id:1,title:"new"},{id:2,title:"update"}],errors:[]});
    },1000);

}

export default GetCloud;