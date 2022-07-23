import React, { useState } from 'react';

const UserList = ({users,deleteUser,selectUser}) => {
    return (
        <div className='users-wrapper'>
            <ul>
                {
                    users.map(user =>(
                        <li 
                            key={user.id}
                            className='user-card'
                            style={{listStyle:"none"}}
                        >
                            <b>{user.first_name}{user.last_name}</b>
                            <div>{user.email}</div>
                            <div style={{fontSize:"1.2em"}}>{user.birthday}</div>
                            <button 
                                onClick={() => deleteUser(user.id)}
                                id="delete"
                            >
                                Delete User
                            </button>
                            <button 
                                onClick={() => selectUser(user)}
                                id="edit"
                            >
                                Edit User
                            </button>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default UserList;