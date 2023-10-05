import React from "react";
import ArticleContent from "../../_blogComponents/ArticleContent";

const page: React.FC<any> = ({ params }) => {
    return (
        <div>
            <ArticleContent slug={params.slug} />
        </div>
    );
};

export default page;
