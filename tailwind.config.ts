import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./app/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f97316',
          600: '#ea580c',
        }
      }
    }
  }
}