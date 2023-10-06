"use client";

import useSWR from "swr";
import Link from "next/link";
import { motion } from "framer-motion";

import Article from "./Article";
import { query, articlesFetcher } from "../api/fetchArticles";

export interface Node {
    title: string;
    brief: string;
    slug?: string;
    coverImage: {
        url: string;
    };
}

type ResultsObject = {
    node: Node;
};

const Articles = () => {
    const { data, error } = useSWR(query, articlesFetcher);
    if (error) return <p>Error</p>;
    if (!data) return <p>Loading ...</p>;

    return (
        <div>
            {data.publication.posts.edges.map(
                (result: ResultsObject, index: number) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            key={index}
                            className="flex justify-center drop-shadow-lg"
                        >
                            <div className="w-full md:w-1/2 2xl:w-[25%] m-6">
                                <Link href={`/blog/${result.node.slug}`}>
                                    <Article
                                        title={result.node.title}
                                        brief={result.node.brief}
                                        coverImage={result.node.coverImage.url}
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    );
                }
            )}
        </div>
    );
};

export default Articles;
