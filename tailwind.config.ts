import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			neutral: {
  				'25': '#FAFBFC',
  				'50': '#F5F7FA',
  				'75': '#EBF0F5',
  				'100': '#E2E8F0',
  				'200': '#D8E1EB',
  				'300': '#CFD8E3',
  				'400': '#BECAD6',
  				'500': '#9BA6B2',
  				'600': '#77818C',
  				'700': '#5A6573',
  				'800': '#3E4957',
  				'900': '#1A2B3D',
  				'1000': '#181A1B'
  			},
  			blue: {
  				'100': '#EDF5FF',
  				'200': '#D4E8FF',
  				'400': '#5CA7FF',
  				'500': '#1882FF',
  				'550': '#126FDE',
  				'600': '#0E56AB',
  				'700': '#E8F3FF',
  				'800': '#073C7A'
  			},
  			orange: {
  				'100': '#FFF6ED',
  				'101': '#FFEEDB',
  				'200': '#FFE1C2',
  				'201': '#F9C994',
  				'250': '#F7B166',
  				'300': '#FFA03B',
  				'400': '#F78E1E',
  				'500': '#F27D00',
  				'600': '#D66F00',
  				'800': '#AD5A00'
  			},
  			red: {
  				'25': '#FFF5F5',
  				'50': '#FCECEB',
  				'100': '#FADDDC',
  				'200': '#FDE6E5',
  				'201': '#FAC7C5',
  				'202': '#F7A4A1',
  				'300': '#F48884',
  				'500': '#EF5550',
  				'600': '#D14B46',
  				'700': '#EF4444'
  			},
  			green: {
  				'25': '#E8FCED',
  				'100': '#D6F1DD',
  				'200': '#B2EBBF',
  				'201': '#8DD89E',
  				'300': '#68CB7E',
  				'500': '#03A629'
  			},
  			error: {
  				'500': '#D32F2F'
  			},
  			success: {
  				'500': '#43A046',
  				'600': '#22C55E'
  			},
  			dark: {
  				'100': '#CDC8C2',
  				'500': '#4d5661',
  				'400': '#242729'
  			},
  			purple: {
  				'500': '#A855F7'
  			},
  			yellow: {
  				'500': '#EAB308'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {},
  		animation: {
  			translateDown: 'translateDown 0.4s ease',
  			'glide-horizontal': 'glide-horizontal 2s linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			meteor: 'meteor 5s linear infinite',
  			pulse: 'pulse var(--duration) ease-out infinite'
  		},
  		keyframes: {
  			translateDown: {
  				'0%': {
  					transform: 'translateY(-4px)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'glide-horizontal': {
  				'0%': {
  					transform: 'translateX(-100vw)'
  				},
  				'100%': {
  					transform: 'translateX(100vw)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		xs: '360px',
  		sm: '575px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1160px'
  	},
  	fontFamily: {},
  	fontWeight: {
  		normal: '400',
  		medium: '475',
  		semibold: '525',
  		bold: '600'
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
