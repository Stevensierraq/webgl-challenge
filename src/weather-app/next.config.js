require("dotenv").config({
    path: '.env',
});

module.exports = {
    target: 'serverless',
    publicRuntimeConfig: {
        LOGROCKET_KEY: process.env.LOGROCKET_KEY,
    },
};