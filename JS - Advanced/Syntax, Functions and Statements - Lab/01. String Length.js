function foo(str1, str2, str3) {
    let result = str1.length + str2.length + str3.length
    let avg = Math.floor(result / 3)
    console.log(result);
    console.log(avg);
}

foo('chocolate', 'ice cream', 'cake')