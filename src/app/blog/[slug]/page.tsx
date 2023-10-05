import React from "react";
import ArticleContent from "../../_blogComponents/ArticleContent";

const page: React.FC<any> = ({ params }) => {
    console.log(params.slug);

    return (
        <div>
            <ArticleContent slug={params.slug} />
        </div>
    );
};

export default page;
