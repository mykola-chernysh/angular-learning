const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = `${baseURL}/users`;
const posts = `${baseURL}/posts`;

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`,
    postsById: (id: number): string => `${users}/${id}/posts`
  },
  posts: {
    byId: (id: number): string => `${posts}/${id}`
  },
  comments: {
    commentsByPostId: (id: number): string => `${posts}/${id}/comments`
  }
}

export {urls};
