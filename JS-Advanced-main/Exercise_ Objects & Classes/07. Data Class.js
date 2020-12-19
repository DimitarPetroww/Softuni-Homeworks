class Request {
    constructor (method , uri , version , message) {
        Object.assign(this , {method , uri , version , message , response: undefined , fulfilled : false})
    }
}
