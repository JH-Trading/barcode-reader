const setWithExpire = (key, value, exp) => {
    let now = new Date();
    const item = {value: value, expires: now.getTime() + exp*60*1000*1000};

    localStorage.setItem(key, JSON.stringify(item));
}

const getWithExpire = (key) => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) return null;
    

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expires) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}