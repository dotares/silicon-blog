import React from "react";
import ArticleContent from "../../_blogComponents/ArticleContent";
import Navbar from "../../_globalComponents/Navbar";
import Footer from "../../_globalComponents/Footer";

const page: React.FC<any> = ({ params }) => {
    return (
        <div>
            <Navbar />
            <ArticleContent slug={params.slug} />
            <Footer />
        </div>
    );
};

export default page;
