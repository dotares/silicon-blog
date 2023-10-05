"use client";

import React from "react";
import useSWR from "swr";
import { query, articleContentFetcher } from "../api/fetchArticleContent";

interface ArticleContentProps {
    slug: string;
}

interface ArticleData {
    publication: {
        post: {
            content: {
                markdown: string;
            };
        };
    };
}

const ArticleContent: React.FC<ArticleContentProps> = ({ slug }) => {
    const { data, error } = useSWR<ArticleData, Error>(query, () =>
        articleContentFetcher(slug)
    );
    if (!data) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <p>{data.publication.post.content.markdown}</p>
        </div>
    );
};

export default ArticleContent;
