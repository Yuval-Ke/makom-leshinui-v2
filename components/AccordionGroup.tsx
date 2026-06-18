import Accordion from "./Accordion";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

export default function AccordionGroup({ items }: AccordionGroupProps) {
  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} icon={item.icon}>
          {item.content}
        </Accordion>
      ))}
    </div>
  );
}
