import { useState } from "react";
import "./UserList.css";

const UserList = () => {
  // const [username, setUserName] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    // ['email']: '',
    // w 28:56
    // ASK: po co?
    usertype: "Admin",
  });
  
  // ODP: pusta tablica w useState
  const [users,setUsers] = useState([]);
  console.log("🚀 ~ file: UserList.js:17 ~ users:", users)


 const handleInputChange = (e) => {
        // {setFormData(e.target.value);
        const target = e.target;
        console.log("e.target.value :", target.value);
        console.log("const target :", target);

        // z 28:34 video
        const nameFromFormField = target.name;
        console.log(
        "🚀 ~ file: UserList.js:23 ~ handleInputChange ~ nameNew: na nameFromFormField",
        nameFromFormField
        );
        // console.log("🚀 ~ file: UserList.js:23 ~ handleInputChange ~ nameNew:", nameNew);
        // 32:17
        // ODP: ma byc poza funkcja aby wyswietlala aktualne dane, komentarze zaklocacja segmenty ale patrz na linie pionowe i zuwaj wciec
        // console.log('formData :', formData)
        // w 29:27
        // ASK: kluczowanie
        // ASK: moze byc funkcja bez nawiasu? nie zmienia wyniku nie wyrzuca bledu
        // SK: dlaczego wczesniejsza wartosc? ODP: consolog w funkcji handle a ma byc

        setFormData((prevDataForm) => {
        // ... to kopia poprzedniego stanu 29:58 rozbudowana o
        // 30:5q nadpisz mi pole o tym kluczu [username] ktory odpowiada -
        //- nazwie atrybutu name ! nadpisz go wartością target.value
        // 31:26 formdata na prevDataForm name nie przejmowac sie
        // return {...prevDataForm, [name]: target.value };

        return { ...prevDataForm, [nameFromFormField]: target.value };
        });
    };
    // ODP pobieramy dane jednego uzytkownika z formularza onSubmit
    const setUser = (e) => {
        // ASK : czemu ta metoda jest niewidoczna w srodowisku? np sprawdzenie poprawnosci 
        // ASK jak sprawdzic czy prawidlowa metoda?
        // e.preventDefult();
        e.preventDefault();
        console.log("🚀 ~ file: UserList.js:57 ~ setUser ~ e:", e)

        setUsers(users.concat({...formData, id: new Date()}))
    }

    const removeUser = (id) => {
        console.log(id);

    }

  console.log("formData :", formData);

  return (
    <div className="userList">
      {/* <h2>uwaga: {username}</h2> */}
      {/* <h2>uwaga: {formdata.username}</h2> */}
      {/* // czemu to robi blad */}
      <h2>{formData.username}</h2>
      <h2>{formData.email}</h2>
      <h2>{formData.usertype}</h2>
      {/* console.log("🚀 ~ file: UserList.js:26 ~ UserList ~ formdata:", formdata) */}

      <form
            onSubmit={setUser}
            onChange={handleInputChange}
        >
            <label htmlFor="username"> Podaj imie swoje </label>
            <input
                type="text"
                className="name"
                id="username"
                name="username"
                placeholder="username"
                // onChange={(e)=>{setUserName(e.target.value);}}/>
                // onChange={(e)=>{setFormData(e.target.value);
                // console.log(e.target.value);}}
                //   onChange={handleInputChange}
                // ODP: w polach tekstowych to co w stanie powinno tez byc atrybucie value
                    value={formData.username}            
            />
            <label htmlFor="email"> User email </label>
            <input
                //   onChange={handleInputChange}
                type="email"
                className="email"
                id="email"
                name="email"
                placeholder="email"
                // ODP: w polach tekstowych to co w stanie powinno tez byc atrybucie value
                //ASK: co to robi?
                value={formData.email}            
            />

            <label htmlFor="usertype"> User email </label>
            <select
                //   onChange={handleInputChange}
                className="userType"
                id="usertype-nie-stosujemy-myslnikow-juz"
                name="usertype"
                // ODP: w polach tekstowych to co w stanie powinno tez byc atrybucie value
                value={formData.username}            
                >
                {/* w tym przypadku 'value' musi byc bo tu nie dziala */}
                <option value="admin">Admin</option>
                {/* <option>Admin</option> */}
                <option value="userek">User</option>
            </select>
            <button type="submit" className="buttonSubmit" id="button">
                Save
            </button>
    </form> 

      <div className="list">
            {/* // ASk co robi map? */}
            {users.map((user) => {
                return (
                    <div className="userItems" key={user.id}>
                        {/* // ASK moge w tym momencie wyswietlic cos w konsoli jak?</div> */}
                        {/* {console.log(user.id)} */}
                        {/* ASK: czemu bez nawiasu nie działa? w JS dzialalo? */}
                        {/* <h3>{user.id.toLocalString() }</h3> */}
                        <h3>{(user.id).toLocalString() }</h3>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.usertype}</p>
                        {/* ASK jak wyswietlic ponizej */}
                        {/* ASK blad Data? */}
                        {/* <p>{user.id}</p>  */}
                        
                    </div>
                    );
            })}
        </div>
    </div>
  );
};

export default UserList;
