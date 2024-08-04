export const authLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currUser = users.find(
        (u) => u.email === email && u.password === password
    );

    if (currUser) {
        localStorage.setItem('user', JSON.stringify(currUser));
        return currUser;
    } else {
        throw new Error('user doesnt exist');
    }
};

export const authRegister = (username, email, password, role) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currUser = users.find(
        (u) => u.email === email || u.username === username
    );

    if (currUser) {
        throw new Error('user already exists');
    } else {
        const newUser = { username, email, password, role };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(newUser));
        return newUser;
    }
};

export const authLogout = () => {
    return localStorage.removeItem('user');
};

export const getCurrUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
