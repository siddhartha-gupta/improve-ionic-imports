const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.alias = {
    "@services": path.resolve('./src/app/'),
    "@pages": path.resolve('./src/pages/'),
    "@services": path.resolve('./src/services/'),

};

module.exports = function () {
    return useDefaultConfig;
};