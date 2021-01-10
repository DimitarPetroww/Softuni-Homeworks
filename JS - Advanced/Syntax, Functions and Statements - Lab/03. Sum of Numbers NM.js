function foo(n1,n2) {
    n1 = Number(n1)
    n2 = Number(n2)
    let result = 0;
    for (let i = n1; i <= n2; i++) { result += i }
    console.log(result);
}

foo('1','5')