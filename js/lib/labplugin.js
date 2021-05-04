var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ben:plugin',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ben',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

