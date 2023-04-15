const useLocalStorage = () => {
    let details='';
    result = details.length>0 ? localStorage.getItem(details): '';
    setValue = (value) => {
        details = value;
        localStorage.setItem('names',details);
    }
    return [result, setValue]
}
export default useLocalStorage;