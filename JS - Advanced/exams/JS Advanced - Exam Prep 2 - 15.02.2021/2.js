class ChristmasDinner {
    constructor(budget) {
        Object.assign(this, {budget: budget, dishes: [], products: [], guests: {}})
    }
    shopping([type, price]) {
        if(this.budget < price) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(type)
        this.budget-=price
        return `You have successfully bought ${type}!`
    }
    recipes(recipe) {
        if(recipe.productsList.some(p => !this.products.includes(p))) {
            throw new Error("We do not have this product")
        }
        this.dishes.push(recipe)
        return `${recipe.recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if(this.dishes.every(x=> x.recipeName !==dish)) {
            throw new Error("We do not have this dish")
        }
        if(this.guests[name]) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        return Object.entries(this.guests).map(([name, dish])=> `${name} will eat ${dish}, which consists of ${this.dishes.find(x=> x.recipeName === dish).productsList.join(", ")}`)
        .join("\n")
    }
    get budget() {
        return this._budget
    }
    set budget(value) {
        if(value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value
    }
}
