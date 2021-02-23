function solve(arr) {
    let string=arr[0]
    let pattern= / ([A-Za-z0-9][A-Za-z0-9]?|[A-Za-z0-9][\w._-]*\w)@(([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z])\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))(\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))*/gm
    if(string.match(pattern) !==null) {
        for (const email of string.match(pattern)) {
            console.log(email);
        }
    }
}
