export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What do I need to get started?",
    answer: "To get started, you only need a free Framer account. Once you purchase a template, you will receive a remix link that copies the entire project directly into your Framer dashboard instantly."
  },
  {
    id: 2,
    question: "Do I need to know how to code?",
    answer: "Not at all! All templates are built 100% visually in Framer. You can edit text, swap images, and change colors easily without writing a single line of code."
  },
  {
    id: 3,
    question: "Can I use my own custom domain?",
    answer: "Yes, you can easily connect your own custom domain (e.g., yourname.com) directly through the Framer project settings menu."
  },
  {
    id: 4,
    question: "How do I start using the template?",
    answer: "Once you buy a template, you’ll get a private link to duplicate it directly into your Framer account. From there, you can edit everything — text, colors, images, and sections — right inside the Framer editor."
  }
];