import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>회사소개</AccordionTrigger>
        <AccordionContent className="text-lg font-bold">
         설명1
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>제품소개</AccordionTrigger>
        <AccordionContent>
          설명1
        </AccordionContent>
        <AccordionContent>
          설명2
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>고객센터</AccordionTrigger>
        
      </AccordionItem>
    </Accordion>
  )
}
