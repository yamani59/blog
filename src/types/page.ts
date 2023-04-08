export type FrontMatterType = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  sosialImage: string;
  date: string;
  tags: string[];
};

export type HomeProps = {
  slug: string;
  frontmatter: FrontMatterType;
};