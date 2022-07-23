import React, { useEffect, useState } from 'react';

const UserForm = ({addUser,selectedUser,editUser}) => {
    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (selectedUser !== null){
            setFirst(selectedUser.first_name)
            setLast(selectedUser.last_name)
            setEmail(selectedUser.email)
            setPassword(selectedUser.password)
            setBirthday(selectedUser.birthday)
        }
    },[selectedUser])


    const submit = e => {
        e.preventDefault()

       const newUser = {
        email,
        password,
        first_name,
        last_name,
        birthday
       }

       if (selectedUser !== null){
            newUser.id = selectedUser.id
            editUser(newUser)
            console.log("ping")

        }else {
           addUser(newUser)
        }
        reset()

    }

    const reset = () => {
        setFirst('')
        setLast('')
        setEmail('')
        setPassword('')
        setBirthday('')
    }


    const passwordVis = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="user-input">
                    <label htmlFor="firt"></label>
                    <input 
                        type="text" 
                        id='first'
                        placeholder='First Name'
                        onChange={e => setFirst(e.target.value)}
                        value={first_name}
                    />
                    <input 
                        type="text"
                        id='last'
                        placeholder='Last Name'
                        onChange={e => setLast(e.target.value)}
                        value={last_name}
                    />
                </div>
                <div className="user-input">
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        id='email'
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <input 
                        type={isVisible ? "text" : "password"} 
                        id='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        
                    />
                    
                   <i 
                        className="fa-solid fa-eye display-hover"
                        type='button'
                        onClick={passwordVis}
                        value={"ojito"}

                    ></i>
                </div>
                <div className="user-input"> 
                    <label htmlFor="dob"></label>
                    <input 
                        type="text"
                        id='dob'
                        placeholder='Birthday'
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>
                <button>{selectedUser !== null ? "Update User" : "Add User" }</button>
            </form>
        </div>
    );
};

export default UserForm;