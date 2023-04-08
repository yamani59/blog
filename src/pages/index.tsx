import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { HomeProps, FrontMatterType } from "./_types";

export const getStaticProps: GetStaticProps<{ posts: HomeProps[] }> = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const frontmatter = matter(readFile).data as FrontMatterType;
    return { slug, frontmatter };
  });

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: { posts: HomeProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/posts/${slug}`}>
            <span>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.sosialImage}`}
              ></Image>
              <h1 className="p-4">{frontmatter.title}</h1>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
