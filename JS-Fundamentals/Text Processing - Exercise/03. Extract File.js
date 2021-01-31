function solve(string) {
    let file=string.substring(string.lastIndexOf("\\") + 1)
    console.log(`File name: ${file.substring(0 , file.lastIndexOf("."))}`);
    console.log(`File extension: ${file.substring(file.lastIndexOf(".") + 1)}`);
}
