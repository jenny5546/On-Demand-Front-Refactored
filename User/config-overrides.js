/* *-------------------------------------------------------------------* 
                    public folder 접근 가능하도록 overriding
*-------------------------------------------------------------------* */


const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    return config;
};