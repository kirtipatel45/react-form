import React, { useState } from "react";
import api from "../api/axiosConfig";

export default function cityform({reload}) {
const [city, setCity] = useState("");

return (
    <>
    <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
    <button onClick={async () => {
        await api.post("/city", { name: city });
        setCity("");
        reload();
    }}>Add City</button>
    </>
);
}
