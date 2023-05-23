import axios from "axios";

const instance = axios.create({
    baseURL: "https://starbucks-vv25.onrender.com",
});

export default instance;
