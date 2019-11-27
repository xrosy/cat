
const datetimeConf = ['zh', { hour12: false }];

export const timestamp = () => Date.now();

export const datetime = () => (new Date).toLocaleString(...datetimeConf);

export const date = () => (new Date).toLocaleDateString(...datetimeConf);

export const time = () => (new Date).toLocaleTimeString(...datetimeConf);

export const cwd = () => process.cwd();