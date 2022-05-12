import path from "path";
import fs from "fs";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //ファイル名

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHtml = blogContent.toString();

  return {
    id,
    blogContentHtml,
    ...matterResult.data,
  };
}
