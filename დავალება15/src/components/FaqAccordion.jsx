import { useState } from "react";
import faqData from "./faqData";
import FaqIllustration from "./FaqIllustration";
import FaqList from "./FaqList";
import "./FaqAccordion.css";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  function handleItemClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div className="faq-page">
      <div className="faq-card">
        <FaqIllustration />
        <div className="faq-content">
          <h1 className="faq-title">FAQ</h1>
          <FaqList
            items={faqData}
            activeIndex={activeIndex}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </div>
  );
}
