module.exports = {
    trailingSlash: true,
    // https://github.com/aws-amplify/amplify-hosting/issues/1987#issuecomment-885217940
    env: {
        BUILD_ENV: process.env.BUILD_ENV,
        GTM_ID: process.env.GTM_ID,
    }
};
