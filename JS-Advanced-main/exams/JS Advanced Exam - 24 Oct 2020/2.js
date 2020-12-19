function solve() {
    class Developer {
        constructor(firstName, lastName) {
            Object.assign(this, { firstName, lastName, baseSalary: 1000, tasks: [], experience: 0 })
        }
        addTask(id, taskName, priority) {
            if (priority === "high") {
                this.tasks.unshift({ id, taskName, priority })
            } else {
                this.tasks.push({ id, taskName, priority })
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask() {
            let task = this.tasks.shift()
            if (this.tasks.length > 0) {
                return task.taskName
            }
            return `${this.firstName}, you have finished all your tasks. You can rest now.`

        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks() {
            return `Tasks, that need to be completed:\n${this.tasks.map(x => x = `${x.id}: ${x.taskName} - ${x.priority}`).join("\n")}`
        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += Number(bonus)
            this.experience = Number(experience)
        }
        learn(value) {
            this.experience += Number(value)
        }

    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += Number(bonus)
            this.experience = Number(experience) + 5
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find(x => x.id == taskId)
            this.tasks.splice(this.tasks.indexOf(task) , 1)
            if (task.priority === "high") {
                task.priority = "low"
                this.tasks.unshift(task)
                
            } else {
                task.priority = "high"
                this.tasks.push(task)
            }
            return task

        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}
