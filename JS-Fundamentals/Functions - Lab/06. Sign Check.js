function solve(n1, n2, n3) {
    let type = "Negative";
    const result = (x, y, z) => {
        if (x >= 0 && y >= 0 && z >= 0) {
            type = "Positive";
            return type;
        } else if (x < 0 && y < 0 && z >= 0) {
            type = "Positive";
            return type;
        } else if (x < 0 && y >= 0 && z < 0) {
            type = "Positive";
            return type;
        } else if (x >= 0 && y < 0 && z < 0) {
            type = "Positive";
            return type;
        } else if (x * y * z === 0) {
            type = "Positive"
            return type;
        }
        return type;
    }
    console.log(result(n1, n2, n3))
}
