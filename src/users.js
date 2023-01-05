const { trimStr } = require('./utils');

let users = [];

const findUser = (user) => {
    const userName = trimStr(user.name);
    const userRoom = trimStr(user.room);

    return users.find((u) => trimStr(u.name) === userName && trimStr(u.room) === userRoom);
};

const addUser = (user) => {
    const isExist = findUser(user);

    if (!isExist) {
        users.push(user);
    }

    const currentUser = isExist || user;

    return {
        isExist: Boolean(isExist),
        user: currentUser
    }
};

const getRoomUsers = (room) => users.filter(u => u.room === room);

const removeUser = (user) => {
    const foundUser = findUser(user);

    if (foundUser) {
        users = users.filter(({room, name}) => room === foundUser.room && name !== foundUser.name);
    }

    return foundUser;
};

module.exports = { addUser, findUser, getRoomUsers, removeUser };