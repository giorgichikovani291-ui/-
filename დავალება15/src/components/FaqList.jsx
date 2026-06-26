import FaqItem from "./FaqItem";

export default function FaqList({ items, activeIndex, onItemClick }) {
  return (
    <ul className="faq-list">
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onToggle={() => onItemClick(index)}
        />
      ))}
    </ul>
  );
}
