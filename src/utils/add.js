

class AddService {
    constructor() {
        this.tag = document.querySelector('#add')
    }
    add(value) {
        return value + this.tag.value
    }
}

