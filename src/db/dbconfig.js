exports.config = {
    user: 'sa_salon',
    server: '103.102.234.246',
    database: 'SALON2020',
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