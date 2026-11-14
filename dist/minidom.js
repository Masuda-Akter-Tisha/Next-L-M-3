class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id = "${this.id}", type = "${this.type}", name = "${this.id}", placeholder = "${this.placeholder}"/>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<Button id = "${this.id}">${this.label}</Button>`;
    }
}
const emailInput = new Input('email', 'email', 'Enter Your Email');
const passwordInput = new Input('password', 'password', 'Enter Your password');
const submitButton = new Button('submit-btn', 'submit');
console.log(emailInput.render());
console.log(passwordInput.render());
console.log(submitButton.render());
export {};
