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
      ['module-resolver', {
        alias: {
          "@services": ["./src/services"],
          "@database": ["./src/database"],
          "@utils": ["./src/utils"],
          "@entities": ["./src/entities"],
          "@repositories": ["./src/repositories"],
        }
      }]
    ],
    ignore: [
      '**/*.test.ts'
    ]
  }