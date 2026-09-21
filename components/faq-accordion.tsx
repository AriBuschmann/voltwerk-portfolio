"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
type Faq = { question: string; answer: string };
export function FaqAccordion({ items }: { items: Faq[] }) { return <Accordion className="faq-list" type="single" collapsible><>{items.map((item, index) => <AccordionItem className="faq-item" key={item.question} value={`frage-${index}`}><AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger><AccordionContent className="faq-content">{item.answer}</AccordionContent></AccordionItem>)}</></Accordion>; }
