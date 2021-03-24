import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    // console.log(friend);
    const {name, email, phone, website} = friend;
    // console.log(friend.name);
    return (
        <div>
            <h2>details about id no : {friendId}</h2>
            {/* <h4>ID : {friendId}</h4> */}
            <h3>Name : {friend.name}</h3>
            <p>Email: {email}</p>
            <p>Phone : {phone}</p>
            <p>website : {website}</p>
        </div>
    );
};

export default FriendDetail;