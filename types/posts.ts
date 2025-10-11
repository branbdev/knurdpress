export interface Post {
  id: string;
  title: string;
  body: string;
  // content: string;
  author: string;
  date: string;
  comments: PostComment[];
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}
