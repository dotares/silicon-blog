"use client";

import React from "react";
import { articleContentFetcher } from "../api/fetchArticleContent";

export interface ArticleContentProps {
    slug: string;
}

const ArticleContent: React.FC<ArticleContentProps> = async ({ slug }) => {
    const data = await articleContentFetcher(slug);

    return (
        <div>
            <p>{data.publication.post.content.markdown}</p>
        </div>
    );
};

export default ArticleContent;
