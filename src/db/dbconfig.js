exports.config = {
    user: 'sa',
    server: '128.199.25.0',
    database: 'YESQ',
    password: 'dbadmin@2020',
    options: {
        trustedconnection: true,
        encrypt: true,
        enableArithAbort: true
    },
    connectionTimeout: 3000000,
    requestTimeout: 3000000,
    pool: {
        idleTimeoutMillis: 3000000,
        max: 100
    }
}