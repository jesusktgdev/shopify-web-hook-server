declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DBNAME: string;
            DBPASS: string;
            DBPORT: number;
            DBHOST: string;
            DBUSER: string;
        }
    }
}

export { };