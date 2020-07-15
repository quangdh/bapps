import React from "react";
import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "src/components/layouts/Base";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container, Breadcrumb } from "react-bootstrap";

type IProps = {
  frontmatter: any;
  markdownBody: string;
};

const PostDetail: React.FC<IProps> = ({
  frontmatter,
  markdownBody,
}: IProps) => {
  return (
    <>
      <Layout>
        <Container>
          {/* <Breadcrumb>
            <Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
          </Breadcrumb> */}
          <br />
          <article>
            <h3>{frontmatter.title}</h3>
            <p>By {frontmatter.author}</p>
            <div>
              <ReactMarkdown source={markdownBody} />
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { postname } = ctx.params;
  const content = await import(`src/data/posts/${postname}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("src/data/posts/", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/posts/${slug}`);
  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
