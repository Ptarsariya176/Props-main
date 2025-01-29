import React from 'react'

function UserProfile({ name, age, location, bio }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Bio:</strong> {bio}</p>
        </div>
    )
}

export default UserProfile