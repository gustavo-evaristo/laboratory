module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ['module-resolver', {
        alias: {
          "@database": ["./src/database"],
          "@utils": ["./src/utils"],
          "@entities": ["./src/entities"],
          "@repositories": ["./src/repositories"],
          "@useCase": ["./src/useCase"],
          "@routes": ["./src/routes"],
          "@app": ["./src/app.ts"],
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }