
class SubtractService {
    constructor() {
        this.tag = document.querySelector('#subtract')
    }
    subtract(value) {
        return value - Number(this.tag.value)
    }
}

