exports.config = {
    user: 'yesq_dev',
    server: '139.59.92.203',
    database: 'YESQTOCKENSDEV',
    password: 'yesq_dev@2020',
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