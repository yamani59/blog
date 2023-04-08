import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import md from "markdown-it";
import { FrontMatterType } from "../@types";
import { ParsedUrlQuery } from "querystring";

interface getStaticPropsParamsType extends ParsedUrlQuery {
  slug: string;
}

type getStaticPropsType = {
  data: FrontMatterType;
  content: string;
};

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  getStaticPropsType,
  getStaticPropsParamsType
> = ({ params }) => {
  const fileName = fs.readFileSync(`posts/${params!.slug}.md`, "utf-8");
  const data = matter(fileName).data as FrontMatterType;
  const content = matter(fileName).content;
  return {
    props: {
      data,
      content,
    },
  };
};
