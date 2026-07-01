import React, { useEffect, useState } from "react";
import { UserCard } from "./Components/UserCard";
import type { IUser } from "./interfaces";
import axios from "axios";
import "./App.css";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchUsers() {
    let res = await axios.get(url);
    setUsers(res.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="მოძებნე სახელით"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="main-container">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
