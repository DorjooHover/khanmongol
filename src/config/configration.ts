export default () => ({
    database: {
        mongoUrl: process.env.MONGO_URL,
        mongoDbName: process.env.MONGO_DB_NAME
    }
})