import matter from "gray-matter";

export function getListGame(): any[] {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      //@ts-ignore
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("src/data/games", true, /\.md$/));
  //@ts-ignore
  return posts;
}

export function getListApp(): any[] {
  // const posts = ((context) => {
  //   const keys = context.keys();
  //   const values = keys.map(context);

  //   const data = keys.map((key, index) => {
  //     let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
  //     const value = values[index];
  //     //@ts-ignore
  //     const document = matter(value.default);
  //     return {
  //       frontmatter: document.data,
  //       markdownBody: document.content,
  //       slug,
  //     };
  //   });
  //   return data;
  // })(require.context("src/data/apps", true, /\.md$/));
  // //@ts-ignore
  // return posts;
  return [];
}
