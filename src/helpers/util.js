export const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (name, value, options = {}) =>  {
    const configs = {
        path: '/',
        ...options,
    };

    if (configs.expires instanceof Date) {
        configs.expires = configs.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    Object.keys(configs).forEach((key) => {
        updatedCookie += `; ${key}`;
        const optionValue = configs[key];
        if (optionValue !== true) {
            updatedCookie += `=${optionValue}`;
        }
    });

    document.cookie = updatedCookie;
}

export const deleteCookie = (name) => {
    setCookie(name, '', {
        'max-age': -1,
    });
}