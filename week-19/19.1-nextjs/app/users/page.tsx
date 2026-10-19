"use client"

import axios from "axios";
import { useState } from "react";

export default async function Users(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
        .then((response) => {
            setData(response.data);
            setLoading(false);
        });

    return <div>
        User Page
        <br />
        {data.name}
        <br />
        {data.email}
    </div>
};