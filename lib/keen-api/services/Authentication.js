const USER = 'user';

export default Authentication = {
    login: (user) => localStorage.setItem(USER, user),
    logout: () => localStorage.removeItem(USER),
    isLoggedIn: () => localStorage.getItem(USER)
}