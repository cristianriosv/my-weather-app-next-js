const useLocalStorage = () => {
    const setLocalStorage = (key: string, value: string) => {
        if (typeof window !== 'undefined') {
            localStorage && localStorage.setItem(key, value);
        }
    };

    const getLocalStorage = (key: string) => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return '';
    };

    return {
        setLocalStorage,
        getLocalStorage
    }
};

export default useLocalStorage;