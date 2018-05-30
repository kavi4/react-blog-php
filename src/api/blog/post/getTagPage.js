const GetTagPage = ({tag,page,pageSize,action})=>{

  let data = new FormData();
  data.append( "json", JSON.stringify({page:page,pageSize:pageSize,tag_id:tag}));
  fetch('/api/post/getTagPage.php', {  
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
    });
}

export default GetTagPage;

