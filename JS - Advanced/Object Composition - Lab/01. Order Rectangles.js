function solve(input) {
    return input.map(([width , height])=> {
        return {
            width,
            height,
            area: function() {
                return this.width * this.height
            },
            compareTo: function(other) {
                return other.area() - this.area() || other.width - this.width
            }
        }
    }).sort((a , b) => a.compareTo(b))
}