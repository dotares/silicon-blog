"use client";

import React from "react";
import { Node } from "./Articles";

const Article: React.FC<Node> = ({ title, brief, url }) => {
    return (
        <div className="border-black border-2">
            <p>{title}</p>
            <p>{brief}</p>
            <p>{url}</p>
        </div>
    );
};

export default Article;
