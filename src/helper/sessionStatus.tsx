export const sessionStatus = (): boolean => {
    if (window) {
        const status = window.sessionStorage.getItem("isUserLoggedIn");
        return status === "true" ? true : false;
    }
    else {
        return false
    }
};
