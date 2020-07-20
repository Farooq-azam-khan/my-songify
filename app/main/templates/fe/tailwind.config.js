module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.jsx',
      './src/**/*.js',
      './public/index.html'
    ]
  }
  ,
  theme: {
    extend: {
      height: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
    borderWidth: ['checked'],
    borderColor: ['checked']
  },
  plugins: [],
}
