import bcrypt from "bcryptjs";
const user = [
    {
        name: "Admin User",
        email: "admin@dhakatopi.com",
        password: bcrypt.hashSync("kathmandu", 10),
        isAdmin: true
    },
    {
        name: "Jhon Doe",
        email: "jhon@dhakatopi.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Bikram Aryal",
        email: "bikram@dhakatopi.com",
        password: bcrypt.hashSync("123456", 10),  
    },
];

export default user;