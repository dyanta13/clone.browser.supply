// Definisi struktur untuk satu item tautan
export interface FooterLink {
  title: string;
  href: string;
}

// Definisi struktur utama menu footer
export interface FooterDataStructure {
  column1: FooterLink[];
  column2: FooterLink[];
}

// Data statis yang diekspor
export const footerData: FooterDataStructure = {
  column1: [
    { title: "Templates", href: "#" },
    { title: "Live examples", href: "#" },
    { title: "Bundle", href: "#" },
    { title: "Blog", href: "#" }
  ],
  column2: [
    { title: "Quiz", href: "#" },
    { title: "Support", href: "#" },
    { title: "Privacy", href: "#" }
  ]
};