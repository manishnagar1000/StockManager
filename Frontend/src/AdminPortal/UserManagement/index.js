import React, { useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleAddUser = () => {
        if (newUser.name && newUser.email) {
            setUsers([...users, { ...newUser, id: Date.now() }]);
            setNewUser({ name: '', email: '' });
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setNewUser(user);
    };

    const handleUpdateUser = () => {
        setUsers(
            users.map((user) => (user.id === editingUser.id ? newUser : user))
        );
        setEditingUser(null);
        setNewUser({ name: '', email: '' });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="mb-6 text-2xl font-bold">User Management</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                    className="mr-2 p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    className="mr-2 p-2 border rounded"
                />
                {editingUser ? (
                    <button
                        onClick={handleUpdateUser}
                        className="px-4 py-2 text-white bg-blue-600 rounded"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        onClick={handleAddUser}
                        className="px-4 py-2 text-white bg-green-600 rounded"
                    >
                        Add
                    </button>
                )}
            </div>
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="p-2 border">{user.name}</td>
                            <td className="p-2 border">{user.email}</td>
                            <td className="p-2 border">
                                <button
                                    onClick={() => handleEditUser(user)}
                                    className="mr-2 px-3 py-1 text-white bg-blue-600 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="px-3 py-1 text-white bg-red-600 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
