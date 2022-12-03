const callApi = new Promise((resolve, reject) => {
    console.log(`call to xxx.com`)
    let mockResponse;
    mockResponse = {id: 12345, name: "Minh"}

    if (mockResponse != undefined) {
        resolve(mockResponse)
    } else {
        reject("no record found")
    }
})


callApi
    .then((result) => result)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => console.log(err))


