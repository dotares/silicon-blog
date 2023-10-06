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

    let date = new Date(articlePublishedAt);
    let formattedPublishedAt = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // const highlightedContent = hljs.highlight(articleContent).value;

    return (
        <div className="font-sans lg:mx-32 xl:mx-72 2xl:mx-96 mx-6 space-y-12 flex flex-col">
            <img
                className="rounded-xl"
                src={articleCoverImage}
                alt="Article's cover image"
            />
            <h1 className="md:text-4xl text-2xl font-semibold text-center">
                {articleTitle}
            </h1>
            <div className="flex lg:flex-row flex-col justify-center space-y-6 lg:space-y-0 lg:space-x-12 space-x-0 items-center">
                <div className="flex space-x-6 justify-center">
                    <div className="flex items-center space-x-3">
                        <svg
                            className="fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            viewBox="0 0 576 512"
                        >
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                        <div>{articleViews}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            viewBox="0 0 512 512"
                            className="fill-white"
                        >
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                        <div>{articleReactionCount}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            viewBox="0 0 512 512"
                            className="fill-white"
                        >
                            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                        </svg>
                        <div>{articleResponseCount}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            viewBox="0 0 448 512"
                            className="fill-white"
                        >
                            <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                        </svg>
                        <div>
                            {articleReadTime}{" "}
                            {articleReadTime > 1 ? "mins" : "min"}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            viewBox="0 0 448 512"
                            className="fill-white"
                        >
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                        </svg>
                        <div>{formattedPublishedAt}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href={articleUrl}>Read on Hashnode</a>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18"
                                width="18"
                                viewBox="0 0 512 512"
                                className="fill-white"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="w-[90%] articleContent"
                    dangerouslySetInnerHTML={{ __html: articleContent }}
                ></div>
            </div>
        </div>
    );
};

export default ArticleContent;
