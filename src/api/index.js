
import axios from 'axios'
import isString from 'lodash/isString'
import ApiConstants from './ApiConstant';

export const api = axios.create({
    baseURL: ApiConstants.BASEURI,
});
export function setToken(token) {
    api.defaults.headers.Authorization = 'Bearer ' + token;
}

export function clearToken() {
    delete api.defaults.headers["Authorization"]
}

export function getToken() {
    return api.defaults.headers["Authorization"]
}

function baseAxios(options) {
    api.defaults.timeout = options.timeout || 30000

    return api
}


api.interceptors.request.use(req => {
    return req;
});

api.interceptors.response.use(response => {
    return response
}, errorResponseHandler);

function errorResponseHandler(error) {

    return error
}

function executeRequest(method, pathname, data, options = {}) {
    const body = method === 'get' || !data ? {} : { data }

    // 
    const reqObj = { method, url: pathname, params: options.query, ...body }
    // console.log('vvvvvreqObjreqObjreqObjreqObj', reqObj)
    const baseAxiosRequest = baseAxios(options)
    console.log('baseAxiosRequest', baseAxiosRequest)
    console.log('vvvvvreqObjreqObjreqObjreqObj', reqObj)
    return new Promise(async (resolve, reject) => {
        try {
            const res = await baseAxiosRequest
                .request(reqObj);
            console.log('baseAxiosRequest', res)
            resolve(res.data);

        }
        catch (error) {
            let errordata = parseError(error)
            // console.log('baseAxiosRequest', errordata)

            reject(errordata);
        }
    })
}

const parseError = error => {
    console.log('Api Error', error)
    var message = "Something went wrong. Please try later";
    if (error && error.response != undefined) {
        if (error.response.data) {
            var data = error.response.data;
            if (isString(data)) {
                message = data
            } else {
                let errorData = data.message;
                if (errorData instanceof Array) {
                    message = errorData[0];
                } else {
                    message = errorData;
                }
            }
        }
    } else {
        message = error.message ? error.message : message;
    }
    // console.log('error message-=-=-=-=-=-=', message)
    return message;
};


export default {
    get(pathname, options) {
        console.log('get(pathname, data, options) {', pathname, data, options)
        return executeRequest('get', pathname, data, options)
    },

    post(pathname, data, options) {
        // console.log('post(pathname, data, options) {', pathname, data, options)
        return executeRequest('post', pathname, data, options)
    },

    put(pathname, data, options) {
        return executeRequest('put', pathname, data, options)
    },

    delete(pathname, data, options) {
        return executeRequest('delete', pathname, data, options)
    },

    all(promises) {
        return axios.all(promises)
    }
}