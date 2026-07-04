import type { UserStatsProps } from "./types";

export default function UserStats({
  repos,
  followers,
  following,
}: UserStatsProps) {
  return (
    <div className="stats-row">
      <div className="stats-item">
        <span className="stats-label">Repos</span>
        <span className="stats-value">{repos}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">Followers</span>
        <span className="stats-value">{followers}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">Following</span>
        <span className="stats-value">{following}</span>
      </div>
    </div>
  );
}
