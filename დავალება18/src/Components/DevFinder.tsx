import { useState, useEffect } from "react";
import type { GitHubUser } from "./types";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import "./DevFinder.css";

export default function DevFinder() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);

  async function fetchUser(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      setError("No results");
      setUser(null);
      return;
    }

    setUser(await res.json());
    setError("");
  }

  useEffect(() => {
    fetchUser("octocat");
  }, []);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <div className="container">
        <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={() => fetchUser(query)}
          error={error}
        />

        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}
