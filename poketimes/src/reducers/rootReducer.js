const initState = {
  posts: [
    {id: '1', title: 'Node and express', body: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'},
    {id: '2', title: 'React', body: 'React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX.'},
    {id: '3', title: 'Angular', body: 'AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.'}
  ]
}



const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
     return post.id !== action.id
   });
   return {
     ...state,
     posts: newPosts
   }
  }
  return state;
}

export default rootReducer