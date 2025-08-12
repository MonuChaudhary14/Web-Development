import './Item.css'

function Item(props){
    let message = "This is the message which i have to send ";
    const message1 = props.message;

    // We can also use array or object to add elements

    return (<p>Hello, I am Monu Chaudhary {message} {message1} {props.children}</p>)
}

export default Item;