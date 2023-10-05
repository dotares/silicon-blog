"use client";

import useSWR from "swr";
import Link from "next/link";

import Article from "./Article";
import { query, fetcher } from "../api/fetchArticles";

export interface Node {
    title: string;
    brief: string;
    url: string;
    slug?: string;
}

type ResultsObject = {
    node: Node;
};

const Articles = () => {
    const { data, error } = useSWR([query], fetcher);
    if (error) return <p>Error</p>;
    if (!data) return <p>Loading ...</p>;

    return (
        <div>
            {data.publication.posts.edges.map(
                (result: ResultsObject, index: number) => {
                    return (
                        <Link key={index} href={`/blog/${result.node.slug}`}>
                            <Article
                                title={result.node.title}
                                brief={result.node.brief}
                                url={result.node.url}
                            />
                        </Link>
                    );
                }
            )}
        </div>
    );
};

export default Articles;
