import { useRef, forwardRef } from "react";
import Input from "./Input";
import Button from "./Button";



function UseRef() {
  const inputRef = useRef();
 // console.log(inputRef.current);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const buttonRef = useRef();
 // console.log(buttonRef.current);

  return (
    <div>
      <h1 className="my-2">useRef() ve useForward()</h1>
      <Input
        className="border-solid border-2 border-indigo-600"
        type="text"
        ref={inputRef}
      />
      <button
        onClick={() => focusInput()}
        className="border-solid border-2 border-green-600 mx-3"
      >
        Focusla
      </button>
      <hr className="my-3" />
      <Button
        ref={buttonRef}
        className="border-solid border-2 border-indigo-300"
      >
        This is custom button
      </Button>
    </div>
  );
}
export default UseRef;
