import React from 'react'
import { useEffect } from 'react'
import {fetchUsers} from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
export function UserView() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    }, []);

    const {isLoading, usersList, error} = useSelector((state)=>state.user)

  return (
    <div>
        <h1>User</h1>
        {
            isLoading && <p>Loading...</p>
        }
        {
            usersList.length && <ul>
                {
                    usersList.map((user)=><li key={user.id}>{user.name}</li>)
                }
            </ul>
        }
        {
            error && <p>{error}</p>
        }
    </div>
  )
}
