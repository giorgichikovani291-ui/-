export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  error: string;
}

export interface UserCardProps {
  user: GitHubUser;
}

export interface UserStatsProps {
  repos: number;
  followers: number;
  following: number;
}

export interface UserInfoProps {
  location: string | null;
  twitter: string | null;
  blog: string | null;
  company: string | null;
}
