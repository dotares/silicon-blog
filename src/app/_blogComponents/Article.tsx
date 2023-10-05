"use client";

import React from "react";

interface ArticleProps {
    title: string;
    brief: string;
    coverImage: string;
}

const Article: React.FC<ArticleProps> = ({ title, brief, coverImage }) => {
    return (
        <div className="border-black border-2">
            <img src={coverImage} alt="" />
            <p>{title}</p>
            <p>{brief}</p>
        </div>
    );
};

export default Article;
