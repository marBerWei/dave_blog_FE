export function addPost(title) {
  // A plain Object
  return {
    type: "ADD_POST",
    payload: title
  }
}


// export function removePost(id) {
//   return {
//     type: "REMOVE_POST",
//     payload: id
//   }
// }


function fetchingPosts() {
  return {
    type: "FETCHING_POSTS"
  }
}

function fetchedPosts(posts) {
  return {
    type: "FETCHED_POSTS",
    payload: posts
  }
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(fetchingPosts())
    fetch('http://localhost:3001/api/v1/posts')
      .then((res) => res.json())
      .then((json) => {
        const posts = json
        dispatch(fetchedPosts(posts))
      })
  }
}


// export function searchPosts(title) {
//   return function (dispatch) {
//     dispatch(fetchingPosts())
//     fetch(`https://www.googleapis.com/Posts/v1/volumes?q=${title}&maxResults=40`)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(fetchedPosts(json.items))
//         // json.items
//       })
//   }

// }