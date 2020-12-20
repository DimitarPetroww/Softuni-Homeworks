function solve({method, uri, version, message}) {
    const methods=["GET", "POST", "DELETE", "CONNECT"]
    const versions=["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]

    if(!methods.includes(method) || method===undefined) {
        throw new Error("Invalid request header: Invalid Method")
    }
    if(!/^[A-Za-z0-9.]+$|^\*$/.test(uri) || uri===undefined) {
        throw new Error("Invalid request header: Invalid URI")
    }
    if(!versions.includes(version) || version===undefined) {
        throw new Error("Invalid request header: Invalid Version")
    }
    if(!/^[^<>\\&'"]*$/.test(message) || message===undefined) {
        throw new Error("Invalid request header: Invalid Message")
    } 

    return {method, uri, version, message}
}
