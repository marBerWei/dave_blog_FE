export function createPost(postParams) {
  return fetch('http://localhost:3001/api/v1/posts', {
      method: 'post',
      body: postParams,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': localStorage.getItem('jwt')
      }
    })
      .then(resp => resp.json())
}