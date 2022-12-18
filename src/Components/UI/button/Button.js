
import './Button.css';


const Button = (props) => {
    console.log(props.className)
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    );
}

export default Button;
