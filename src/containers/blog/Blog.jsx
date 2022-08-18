import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blog = () => {
  return (
    <div className="gpt3-blog section-padding">
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">
          {" "}
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3-blog-container">
        <div className="gpt3-blog-container-1">
          <Article
            imgURL={blog01}
            date="Sep 26, 2022"
            title="GPT-3 and Open AI is the Future. How is it?"
          />
        </div>
        <div className="gpt3-blog-container-2">
          <Article
            imgURL={blog02}
            date="Sep 26, 2022"
            title="GPT-3 and Open AI is the Future. How is it?"
          />
          <Article
            imgURL={blog03}
            date="Sep 26, 2022"
            title="GPT-3 and Open AI is the Future. How is it?"
          />
          <Article
            imgURL={blog04}
            date="Sep 26, 2022"
            title="GPT-3 and Open AI is the Future. How is it?"
          />
          <Article
            imgURL={blog05}
            date="Sep 26, 2022"
            title="GPT-3 and Open AI is the Future. How is it?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
