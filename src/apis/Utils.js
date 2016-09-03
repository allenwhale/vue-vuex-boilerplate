export default {
    jsonHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    checkStatus: (res) => {
        if (res.status >= 200 && res.status < 300) {
            return res.json()
        } else {
            return Promise.reject(res.json())
        }
    },
    checkStatusWithData: (data) => (res) => {
        if (res.status >= 200 && res.status < 300) {
            return Promise.resolve(res.json().then((r) => ({
                ...r,
                data
            })))
        } else {
            return Promise.reject(res.json())
        }
    }
}
