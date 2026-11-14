abstract class UIElement {
    constructor (protected id : string) {}

    abstract render () : String;
}

class Input extends UIElement {
    constructor (
         id : string,
         private type : string,
         private placeholder : string 
        ) {

        super (id);
    }

    render () {
        return `<input id = "${this.id}", type = "${this.type}", name = "${this.id}", placeholder = "${this.placeholder}"/>`;
    }
}

class Button extends UIElement {

    constructor (
        id : string, 
        private label : string
    ) { 
        super (id);
    }


    render () {
        return `<Button id = "${this.id}">${this.label}</Button>`
    }
}

const emailInput = new Input ('email', 'email', 'Enter Your Email');
const passwordInput = new Input ('password', 'password', 'Enter Your password');
const submitButton = new Button ('submit-btn', 'submit');

console.log(emailInput.render ());
console.log(passwordInput.render ());
console.log(submitButton.render ());
