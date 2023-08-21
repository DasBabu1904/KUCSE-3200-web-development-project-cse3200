import { useEffect, useState } from "react";

 function   LoadData  (url) {
    const [data, setData] = useState({});
    useEffect(async() => {
        await fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return [data, setData];
}

export default LoadData;