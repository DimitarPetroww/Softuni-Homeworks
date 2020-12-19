class Point {
    constructor(x , y) {
        this.x=x
        this.y=y
    }
    static distance(p1 , p2) {
        return Math.sqrt(Math.abs(p1.x - p2.x)**2 + Math.abs(p1.y - p2.y)**2)
    }
}
