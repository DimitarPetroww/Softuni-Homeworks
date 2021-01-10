function classes() {
    class Figure {
        constructor(unit = "cm") {
            this.units = unit
        }
        changeUnits(x) {
            this.units = x
        }
        convertUnits(x, radius) {
            let obj = {
                "mm": (x) => x * 10,
                "cm": (x) => x,
                "m": (x) => x * 0.01
            }
            return obj[x](radius)
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this.radius = radius
        }
        get area() {
            return Math.PI * super.convertUnits(this.units, this.radius) ** 2
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${super.convertUnits(this.units, this.radius)}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.width = width
            this.height = height
        }
        get area() {
            return super.convertUnits(this.units, this.width) * super.convertUnits(this.units, this.height)
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${super.convertUnits(this.units, this.width)}, height: ${super.convertUnits(this.units, this.height)}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}