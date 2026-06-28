import heroImage from "../assets/flowers.jpg";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export default function TodoHero() {
  const now = new Date();
  const weekday = weekdays[now.getDay()];
  const day = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  return (
    <div className="todo-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="todo-hero-overlay">
        <span className="todo-hero-date">
          {weekday} {day}
        </span>
        <span className="todo-hero-time">
          {hours}:{minutes} {ampm}
        </span>
      </div>
    </div>
  );
}
