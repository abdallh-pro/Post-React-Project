import classes from './NewPost.module.css';
import { useState } from 'react';


function NewPost({onCancel , onAddPost }) {
    const [entreName, setEntreName] = useState('');
    const [entreBody , setEntreBody ]= useState('');
    

    function changeNameHandler(event) {
        setEntreName(event.target.value);
    }

    function changeBodyHandler(event) {
        setEntreBody(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const postData ={
            name :entreName,
            body :entreBody
        };
        onAddPost(postData);
        onCancel();
    }

    return (
    <form className={classes.form} onSubmit={submitHandler} >
        <p>
        <label htmlFor="name"  >Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
        </p>
        <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p className={classes.actions}>
        <button type="button" onClick={onCancel} >Cancel</button>
        <button type="submit" >Submit</button>
        </p>
    </form>
    );
}

export default NewPost;