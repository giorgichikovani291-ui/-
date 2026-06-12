function App() {
  let users = [
    {
      id: "1",
      name: "gio",
      age: 19,
      role: "Admin",
      skills: ["იუზერების კონტროლი", "ყველაფერი"],
      image:
        "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
    },
    {
      id: "2",
      name: "luka",
      age: 20,
      role: "User",
      skills: ["დათვალიერება", "თამაში", "ყურება"],
      image:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: "3",
      name: "nika",
      age: 17,
      role: "User",
      skills: ["დათვალიერება", "თამაში", "ყურება"],
      image:
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    },
    {
      id: "4",
      name: "nino",
      age: 24,
      role: "Admin",
      skills: ["იუზერების კონტროლი", "ყველაფერი"],
      image:
        "https://fastly.picsum.photos/id/935/200/300.jpg?blur=5&hmac=A4h2YYMJhSEONyI0u4IxeZ2UrIVrC2okHnQgPvNGseM",
    },
  ];
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

function UserCard({ user }) {
  return (
    <div
      style={{
        border: "5px solid black",
        margin: "10px",
        padding: "10px",
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        backgroundColor: user.role === "Admin" ? "gold" : "#f4f4f4",
      }}
    >
      <h1>
        id:{user.id} | სახელი: {user.name} | ასაკი: {user.age}
      </h1>
      <h2>
        როლი:{user.role} | skills: {user.skills.join(", ")}
      </h2>
      <img
        src={user.image}
        alt="ფოტო"
        style={{
          width: "100px",
          height: "100px",
          border: "5px solid black",
          marginLeft: "25px",
        }}
      />
    </div>
  );
}
export default App;
