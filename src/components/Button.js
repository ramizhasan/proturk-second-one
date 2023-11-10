import { forwardRef } from "react";

const Button = forwardRef((props,ref) => {
    return (
        <button ref={ref} {...props}>{props.children}</button>
    );
}); 

export default Button;
