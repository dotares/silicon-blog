"use client";

import React from "react";
import { articleContentFetcher } from "../api/fetchArticleContent";

export interface ArticleContentProps {
    slug: string;
}

const ArticleContent: React.FC<ArticleContentProps> = async ({ slug }) => {
    const data = await articleContentFetcher(slug);

    const articleTitle = data.publication.post.title;
    const articleCoverImage = data.publication.post.coverImage.url;
    const articleContent = data.publication.post.content.html;
    const articleUrl = data.publication.post.url;
    const articleReadTime = data.publication.post.readTimeInMinutes;
    const articlePublishedAt = data.publication.post.publishedAt;
    const articleReactionCount = data.publication.post.reactionCount;
    const articleResponseCount = data.publication.post.responseCount;
    const articleViews = data.publication.post.views;

    return (
        <div>
            <img src={articleCoverImage} alt="Article's cover image" />
            <h1>{articleTitle}</h1>
            <div>
                <p>Reads {articleViews}</p>
                <p>Likes {articleReactionCount}</p>
                <p>Comments {articleResponseCount}</p>
                <p>readTime {articleReadTime}</p>
                <p>published {articlePublishedAt}</p>
            </div>
            <a href={articleUrl}>Read on Hashnode</a>
            <div dangerouslySetInnerHTML={{ __html: articleContent }}></div>
        </div>
    );
};

export default ArticleContent;
