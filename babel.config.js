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
          "@models": ["./src/models"],
        }
      }]
    ],
    ignore: [
      '**/*.test.ts'
    ]
  }