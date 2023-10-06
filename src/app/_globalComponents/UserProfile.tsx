"use client";

import React from "react";
import useSWR from "swr";
import { query, userDataFetcher } from "../api/fetchUserData";

const UserProfile = () => {
    const { data, error } = useSWR(query, userDataFetcher);
    if (!data) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;
    return (
        <div className="space-y-4 p-4">
            <div className="space-y-4">
                <h1 className="text-5xl text-center font-JetBrains_Mono font-extrabold">
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
    );
};

export default UserProfile;
