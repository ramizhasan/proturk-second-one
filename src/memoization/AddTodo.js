import { memo } from "react";


function AddTodo ({submitHandle, onChange, todo}) {
    console.log('ADD_TODO rendered');
    return(
        <form onSubmit={submitHandle}>
        <input
          type="text"  value={todo}  onChange={onChange}  
        />
        <button type="submit"  disabled={!todo} >
          Ekle
        </button>
      </form>
    )
}
export default memo(AddTodo);