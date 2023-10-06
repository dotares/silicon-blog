"use client";

import React from "react";

interface ArticleProps {
    title: string;
    brief: string;
    coverImage: string;
}

const Article: React.FC<ArticleProps> = ({ title, brief, coverImage }) => {
    return (
        <div className="">
            <img src={coverImage} alt="Article's cover image" />
            <p>{title}</p>
            <p>{brief}</p>
        </div>
    );
};

export default Article;
