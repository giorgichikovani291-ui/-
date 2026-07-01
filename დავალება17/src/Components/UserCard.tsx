import type { IUser } from "../interfaces";

export const UserCard = ({ user }: { user: IUser }) => (
  <div className="user-card">
    <h1>{user.name}</h1>
    <div className="user-details">
      <p>
        <strong>UserName:</strong> {user.username}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  </div>
);
