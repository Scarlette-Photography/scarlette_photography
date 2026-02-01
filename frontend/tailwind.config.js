/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			burgundy: '#4A0404',
  			forest: '#1A3C34',
  			terracotta: '#C66B54',
  			bone: '#F9F7F2',
  			pastelGreen: '#E8F3E8',
  			charcoal: '#1A1A1A'
  		},
  		fontFamily: {
  			display: ['Righteous', 'sans-serif'],
  			body: ['Manrope', 'sans-serif']
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}