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
            <img src={data.user.profilePicture} alt="Fibz's profile picture" />
            <h1>Fibz</h1>
            <h2>@fibbonachos</h2>
            <p>Followers: {data.user.followersCount}</p>
            <p>{data.user.bioV2.markdown}</p>
        </div>
    );
};

export default UserProfile;
