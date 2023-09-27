
class AddService {
    constructor() {
        this.tag = document.querySelector('#add')
    }
    add(value) {
        return value + Number(this.tag.value)
    }
}

