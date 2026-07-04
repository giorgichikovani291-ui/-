import type { UserCardProps } from "./types";
import UserStats from "./UserStats";
import UserInfo from "./UserInfo";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img className="user-avatar" src={user.avatar_url} alt={user.login} />

      <div className="user-details">
        <div className="user-top">
          <div>
            <h2 className="user-name">{user.name || user.login}</h2>
            <span className="user-login">@{user.login}</span>
          </div>
          <span className="user-joined">
            Joined {formatDate(user.created_at)}
          </span>
        </div>

        <p className={user.bio ? "user-bio" : "user-bio unavailable"}>
          {user.bio || "This profile has no bio"}
        </p>

        <UserStats
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />

        <UserInfo
          location={user.location}
          twitter={user.twitter_username}
          blog={user.blog}
          company={user.company}
        />
      </div>
    </div>
  );
}
