
async function RunQuery(url, query) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let x = Object.assign({}, data);
                console.log(x)
                return x
            })
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }

        // const data = await response.json();
        // return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default RunQuery;

// async function RunQuery(url, query) {
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(query)
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }