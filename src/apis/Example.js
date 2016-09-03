import fetch from 'isomorphic-fetch'
// import qs from 'qs'
import Utils from 'src/apis/Utils'

export default {
    get: (data) => fetch('http://ip.jsontest.com/', {
        credential: 'include',
        method: 'get'
    }).then(Utils.checkStatus)
}
