"use client";

import React from "react";
import useSWR from "swr";
import { query, userDataFetcher } from "../api/fetchUserData";

const UserProfile = () => {
    const { data, error } = useSWR(query, userDataFetcher);
    if (!data) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;
    return (
        <div>
            <div>
                <h1>The Silicon Blog</h1>
                <div>
                    by
                    <div>
                        <img
                            src={data.user.profilePicture}
                            alt="Fibz's profile picture"
                        />{" "}
                        <a href="https://hashnode.com/@Fibz">Fibz</a>
                    </div>
                </div>
            </div>
            <div>
                <p>{data.user.bioV2.markdown}</p>
                <p>{data.user.followersCount} Followers</p>
            </div>
        </div>
    );
};

export default UserProfile;
