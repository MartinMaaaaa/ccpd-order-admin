const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ccpd-order-admin',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

