function foo(data) {
    return data.map(([width, height]) => ({
        width,
        height,
        area(){ return this.width * this.height},
        compareTo(rectagle){
            return rectagle.area() - this.area() || rectagle.width - this.width
        }
    })).sort( (a,b) => a.compareTo(b) )
}


console.log( foo([[10,5], [3,20], [5,12]]) )