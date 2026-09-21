"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Faq = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <div className="faq-list" aria-label="Häufige Fragen">{items.map((item) => <div className="faq-item faq-trigger" key={item.question}>{item.question}</div>)}</div>;
  }

  return <Accordion className="faq-list" type="single" collapsible>{items.map((item, index) => <AccordionItem className="faq-item" key={item.question} value={`frage-${index}`}><AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger><AccordionContent className="faq-content">{item.answer}</AccordionContent></AccordionItem>)}</Accordion>;
}
