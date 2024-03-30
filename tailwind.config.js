/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        base: '76.875rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          'main-elem': '#01acb7',
          'main-elem-darker': '#0B7880',
          'light-elem': '#54eedb',
          'main-text': '#979797',
          dark: '#000000B3',
          line: '#e4e4e4',
          border: 'd8e3ec',
          alert: '#eb5757',
          whitish: '#f5f5f5',
          gray: {
            DEFAULT: '#5b6670',
            1: '#f5f4f4',
            2: 'rgba(91, 102, 112, .5)',
            3: '#b5babf',
            4: '#bdbdbd',
            5: '#B0B0B0',
            6: '#d8e3ec',
            7: '#eeeeee',
            8: '#06233A',
            9: '#F2F7FB',
          },
        },
      },
      spacing: {
        268: '16.75rem',
        388: '24.25rem',
      },
      boxShadow: {
        course: '0 0 10px rgba(0,0,0,.2)',
        'course-info': '0 0px 15px 3px rgba(0,0,0,.2)',
        'user-course': '0 10px 14px 1px rgba(0,0,0,.15)',
        'course-date-drop': '0px 10px 40px 0px #0000001A',
      },
      backgroundImage: {
        footer: "url('/assets/images/bg-footer.jpg')",
      },
    },
  },
  plugins: [],
};
