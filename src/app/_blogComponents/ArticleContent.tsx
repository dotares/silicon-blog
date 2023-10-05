"use client";

import React from "react";

interface ArticleContentProps {
    slug: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ slug }) => {
    return <div>{slug}</div>;
};

export default ArticleContent;
