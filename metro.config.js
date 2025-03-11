module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Suporte para arquivos React Native
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };
  