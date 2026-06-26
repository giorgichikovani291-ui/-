export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <li className="faq-item">
      <button className="faq-question" onClick={onToggle}>
        <span
          className={isOpen ? "faq-question-text active" : "faq-question-text"}
        >
          {question}
        </span>
        <span className={isOpen ? "faq-arrow open" : "faq-arrow"}>▼</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </li>
  );
}
