"use client";

import React from "react";
import useSWR from "swr";
import { query, userDataFetcher } from "../api/fetchUserData";
import Skeleton from "react-loading-skeleton";

const UserProfile = () => {
    const { data, error } = useSWR(query, userDataFetcher);
    if (error) return <p>Error</p>;

    return data ? (
        <div className="space-y-4 p-4">
            <div className="space-y-4">
                <h1 className="text-5xl text-center font-mono font-extrabold">
                    The Silicon Blog
                </h1>
                <div className="text-lg space-x-2 flex items-center justify-center">
                    <p className="text-xl text-center font-semibold">by</p>
                    <img
                        className="h-12 w-12 rounded-full drop-shadow-sm"
                        src={data.user.profilePicture}
                        alt="Fibz's profile picture"
                    />{" "}
                    <a
                        href="https://hashnode.com/@Fibz"
                        className="font-semibold"
                    >
                        Fibz
                    </a>
                </div>
            </div>
            <div className="flex flex-col text-center space-y-2">
                <p className="italic text-lg">"{data.user.bioV2.markdown}"</p>
                <p>
                    <span className="font-bold">
                        {data.user.followersCount}
                    </span>{" "}
                    Followers
                </p>
            </div>
        </div>
    ) : (
        <div className="text-center">
            <Skeleton
                width={"50%"}
                height={400}
                baseColor="#171717"
                highlightColor="#292929"
                duration={0.5}
            />
        </div>
    );
};

export default UserProfile;
