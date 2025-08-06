
export const parseFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?? [];
};