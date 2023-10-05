"use client";

import React from "react";
import { articleContentFetcher } from "../api/fetchArticleContent";

export interface ArticleContentProps {
    slug: string;
}

const ArticleContent: React.FC<ArticleContentProps> = async ({ slug }) => {
    const data = await articleContentFetcher(slug);
    const htmlData = data.publication.post.content.html;

    return (
        <div>
            <h1>{data.publication.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
        </div>
    );
};

export default ArticleContent;
