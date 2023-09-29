import { AddService } from "./add"
import { SubtractService } from "./subtract"

const addService = new AddService()
const subtractService = new SubtractService()

export class ComponentService {
    constructor() {
        this.submit = document.querySelector('#submit')
        this.input = document.querySelector('#input')
        this.equals = document.querySelector('#equals')
    }
    onClick() {
        this.submit.addEventListener('click', (e) => {
            e.preventDefault()
            let value = Number(this.input.value)
            value = addService.add(value)
            value = subtractService.subtract(value)
            this.equals.textContent = `Equals: ${value}`
        })
    }
}

