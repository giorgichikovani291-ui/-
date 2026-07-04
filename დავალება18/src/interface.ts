export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
// {
//   "login": "octocat",
//   "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
//   "name": "The Octocat",
//   "company": "@github",
//   "blog": "https://github.blog",
//   "location": "San Francisco",
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 8,
//   "followers": 23164,
//   "following": 9,
//   "created_at": "2011-01-25T18:44:36Z",
// }
