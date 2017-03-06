import Ember from 'ember';
const VERSION = require('../package.json').version;

export default Ember.Controller.extend({
    version: VERSION
});
