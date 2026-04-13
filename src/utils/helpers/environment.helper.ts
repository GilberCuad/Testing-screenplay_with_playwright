import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    // globals configurations
    ADDRESS_URL: process.env.ADDRESS_URL ?? (() => { throw new Error("ADDRESS_URL is not defined in .env") })(),
    IS_HEADLESS: process.env.HEADLESS  === 'true',
    

    // credentials
    USER_MAIL: process.env.USER_MAIL ?? (() => { throw new Error("USER_MAIL is not defined in .env") })(),
    PASSWORD: process.env.PASSWORD ?? (() => { throw new Error("PASSWORD is not defined in .env") })()
}