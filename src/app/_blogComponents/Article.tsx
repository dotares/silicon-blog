"use client";

import React from "react";
import { Node } from "./Articles";

const Article: React.FC<Node> = ({ title, brief, url }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{brief}</p>
      <p>{url}</p>
    </div>
  );
};

export default Article;
