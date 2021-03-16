

const getData = async () => {
    try {
        const myApi = "http://localhost:3000/";
        const res = await fetch(`${myApi}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

//-----------------------------------------------------------------------------//

const postData = async (data) => {
    try {
        const myApi = "http://localhost:3000/";
        const res = await fetch(`${myApi}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.log(err);
    }
};

//-----------------------------------------------------------------------------//
const deleteData = async (id) => {
    try {
        const myApi = "http://localhost:3000/";
        const res = await fetch(
            myApi + id, {
            method: "DELETE",

        }
        );

    } catch (error) {
        console.log(error);
    }
};

//-----------------------------------------------------------------------------//
const changeData = async (id, data, status) => {
    try {
        const myApi = "http://localhost:3000/";
        const res = await fetch(`${myApi}${id}`, {
            method: "PUT",
            body: JSON.stringify({
                description: data,
                done: status
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
        )
    } catch (error) {
        console.log(error)
    }
}