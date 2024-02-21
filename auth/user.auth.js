//data save: sessionStorage
export const doLoginSessionStorage = (data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

export const getUserFromSessionStorage = () => {
    const data = getDataFromSessionStorage();
    if (data != null) {
        return data.user;
    }
    return null;
}

//data:fetch
export const getIdFromSessionStorage = () => {
    const data = getDataFromSessionStorage();
    if (data != null) {
        return data.Id;
    }
    return null;
}

export const getDataFromSessionStorage = () => {
    const data = sessionStorage.getItem("userData");
    if (data != null) {
        return JSON.parse(data);
    }
    return null;
};

export const isLoggedIn = () => {
    if (getIdFromSessionStorage()) {
        return true;
    }
    return false;
}

//data:remove:logout
export const doLogoutFromSessionStorage = () => {
    sessionStorage.removeItem("userData");
}
