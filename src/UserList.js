import { useState } from 'react';
import './UserList.css'

const UserList = () => {
        // const [username, setUserName] = useState('');
        const [formdata, setFormData] = useState(
            {
            username: '',
            email: ''
        }
        )
    
    return (
       <div className="userList" >
            {/* <h2>uwaga: {username}</h2> */}
            {/* <h2>uwaga: {formdata.username}</h2> */}
            <h2>: {formdata}</h2>
            <form
            onChange={(e)=>{setFormData(e.target.value);
                console.log('e.target.value :', e.target.value);
                console.log('formdata :', formdata);
            }}
            >
                <label htmlFor="username" > Podaj imie swoje </label>
                <input type="text" className="name" id="username" name="username" placeholder="username" 
                // onChange={(e)=>{setUserName(e.target.value);}}/> 
                // onChange={(e)=>{setFormData(e.target.value);
                // console.log(e.target.value);}}
                /> 
                <label htmlFor="email"> User email </label>
                <input type="email" className="email" id="email" name="email" placeholder="email" />
                <label htmlFor="usertype"> User email </label>
                <select className='userType' id='usertype-nie-stosujemy-myslnikow-juz' name="usertype-inny-niz-label">
                    <option>Admin</option>
                    <option>User</option>
                </select>
                <button type="submit" className="buttonSubmit" id="button">
                    Save
                </button>


            </form>
        </div>
    )
}
export default UserList;