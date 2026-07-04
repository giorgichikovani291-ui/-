import type { UserInfoProps } from "./types";

export default function UserInfo({
  location,
  twitter,
  blog,
  company,
}: UserInfoProps) {
  return (
    <div className="info-grid">
      <div className={location ? "info-item" : "info-item unavailable"}>
        <span className="info-icon">📍</span>
        <span>{location || "Not Available"}</span>
      </div>
      <div className={twitter ? "info-item" : "info-item unavailable"}>
        <span className="info-icon">🐦</span>
        <span>{twitter ? "@" + twitter : "Not Available"}</span>
      </div>
      <div className={blog ? "info-item" : "info-item unavailable"}>
        <span className="info-icon">🔗</span>
        <span>{blog || "Not Available"}</span>
      </div>
      <div className={company ? "info-item" : "info-item unavailable"}>
        <span className="info-icon">🏢</span>
        <span>{company || "Not Available"}</span>
      </div>
    </div>
  );
}
