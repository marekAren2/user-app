import { useState } from 'react';
import './UserList.css'

const UserList = () => {
        // const [username, setUserName] = useState('');
        const [formData, setFormData] = useState(
            {
                username: '',
                email: '',
                // ['email']: '',
                // w 28:56
                usertype: ''
             
            }
        ) 
    
    const handleInputChange = (e) => {
        // {setFormData(e.target.value);
        const target = e.target;
        console.log('e.target.value :',target.value);
        console.log('const target :',target);
        // console.log('formdata :', formdata);
        // console.log('formdata.name :', formdata.name);
        // console.log('formdata.username :', formdata.username);
        // }
        // z 28:34 video
        const nameFromFormField = target.name
        console.log("🚀 ~ file: UserList.js:23 ~ handleInputChange ~ nameNew:", nameNew);
        // 32:17
        console.log('formData :', formData)
        // w 29:27
        // ASK: kluczowanie
        // ASK: moze byc funkcja bez nawiasu? nie zmienia wyniku nie wyrzuca bledu
        // SK: dlaczego wczesniejsza wartosc?
        setFormData(prevDataForm=>{
            // ... to kopia poprzedniego stanu 29:58 rozbudowana o
            // 30:58 nadpisz mi pole o tym kluczu [username] ktory odpowiada -
        //- nazwie atrybutu name ! nadpisz go wartością target.value
            // 31:26 formdata na prevDataForm name nie przejmowac sie
        // return {...prevDataForm, [name]: target.value };
        return { ...prevDataForm, [nameFromFormField]: target.value };
        })
               
    };

    
    return (
       <div className="userList" >
            {/* <h2>uwaga: {username}</h2> */}
            {/* <h2>uwaga: {formdata.username}</h2> */}
            {/* // czemu to robi blad */}
            <h2>: {formData.username}</h2>
            {/* console.log("🚀 ~ file: UserList.js:26 ~ UserList ~ formdata:", formdata) */}

            <form
            // onChange={handleInputChange}
            >
                <label htmlFor="username" > Podaj imie swoje </label>
                <input type="text" className="name" id="username" name="username" placeholder="username" 
                    // onChange={(e)=>{setUserName(e.target.value);}}/> 
                    // onChange={(e)=>{setFormData(e.target.value);
                    // console.log(e.target.value);}}
                onChange={handleInputChange}
                /> 
                <label htmlFor="email"> User email </label>
                <input onChange={handleInputChange} type="email" className="email" id="email" name="email" placeholder="email" />
                
                <label htmlFor="usertype"> User email </label>
                <select onChange={handleInputChange} className='userType' id='usertype-nie-stosujemy-myslnikow-juz' name="usertype">
                    <option  >Admin</option>
                    <option value="userek" >User</option>
                </select>
                <button type="submit" className="buttonSubmit" id="button">
                    Save
                </button>


            </form>
        </div>
    )
}
export default UserList;