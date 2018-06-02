import getPage from './getPage';

const GetLatestPostList = ({pageSize,action})=>{
	getPage({params:{page:1},pageSize:pageSize,action:action});
}

export default GetLatestPostList;