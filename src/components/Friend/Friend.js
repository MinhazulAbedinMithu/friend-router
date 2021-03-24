import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    const {id, name, email} = props.friend;
    const friendStyle ={
        border: '1px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    const history = useHistory();
    const handleDetail = (id) => {
        const url = `/friend/${id}`;
        history.push(url);
    }
    return (
        <div style={friendStyle}>
            <p>ID : {id}</p>
            <h4>Name : {name}</h4>
            <p>email : {email}</p>
            <Link to={`/friend/${id}`}>Details About {name}</Link>
             OR 
            <button onClick={() => handleDetail(id)}>Click Here</button>
        </div>
    );
};

export default Friend;