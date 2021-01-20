const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');
const workspaces = getWorkspaces(__dirname);

const watchFolders = [
  path.resolve(__dirname, '..', '..', 'node_modules'),
  ...workspaces.filter((workspaceDir) => !(workspaceDir === __dirname)),
];

module.exports = {
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    // Always resolve these from current module, ignore dev dependencies
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules', 'react-native'),
      react: path.resolve(__dirname, 'node_modules', 'react'),
    },
  },
};
