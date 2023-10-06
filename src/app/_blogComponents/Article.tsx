import React from "react";

interface ArticleProps {
    title: string;
    brief: string;
    coverImage: string;
}

const Article: React.FC<ArticleProps> = ({ title, brief, coverImage }) => {
    return (
        <div className="bg-backgroundz2 p-6 rounded-xl space-y-4">
            <img
                src={coverImage}
                className="rounded-xl"
                alt="Article's cover image"
            />
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-sm font-light">{brief}</p>
        </div>
    );
};

export default Article;
