export default class Request {
    get = async (apiPath) => {
        var dataResult = false
        await fetch(apiPath, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => dataResult = data);
        return dataResult;
    }
}
