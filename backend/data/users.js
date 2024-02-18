import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'luna Shi',
        email: 'luna@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Victor Sun',
        email: 'victor@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
]

export default users;