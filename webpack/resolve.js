const path = require('path');
const CWD = process.cwd();

module.exports = {
  alias: {
    server: path.resolve(CWD, 'src/server/'),
    client: path.resolve(CWD, 'src/client/'),
    components: path.resolve(CWD, 'src/client/components/'),
  },
  extensions: ['.tsx', '.ts', '.js'],
};
