import {defineConfig, presetUno} from 'unocss'

// TODO: find a better way to do this
const colors = ['lavender']
const types = ['bg', 'color', 'border', 'hover:bg', 'hover:color', 'hover:border', 'text']
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const safelistColors = types.flatMap(type =>
	colors.flatMap(color => shades.flatMap(shade => `${type}-${color}-${shade}`)),
)

export default defineConfig({
	presets: [presetUno()],
	content: {
		pipeline: {
			include: ['./**/*.{vue,js,ts,jsx,tsx}', './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'],
		},
	},
	safelist: [...safelistColors],
	theme: {
		container: {
			center: true,
		},
		colors: {
			lavender: {
				DEFAULT: '#A06DF2', // bg-lavender
				500: '#A06DF2', // bg-lavender-500
			},
			facebook: '#3b5999',
			messenger: '#0084ff',
			twitter: '#55acee',
			linkedin: '#0077b5',
			skype: '#00aff0',
			dropbox: '#007ee5',
			wordpress: '#21759b',
			vimeo: '#1ab7ea',
			slideshare: '#0077b5',
			vk: '#4c75a3',
			tumblr: '#34465d',
			yahoo: '#410093',
			'google-plus': '#dd4b39',
			pinterest: '#bd081c',
			youtube: '#cd201f',
			stumbleupon: '#eb4924',
			reddit: '#ff5700',
			quora: '#b92b27',
			yelp: '#af0606',
			weibo: '#df2029',
			producthunt: '#da552f',
			hackernews: '#ff6600',
			soundcloud: '#ff3300',
			blogger: '#f57d00',
			whatsapp: '#25d366',
			wechat: '#09b83e',
			line: '#00c300',
			medium: '#02b875',
			vine: '#00b489',
			slack: '#3aaf85',
			instagram: '#e4405f',
			dribbble: '#ea4c89',
			flickr: '#ff0084',
			foursquare: '#f94877',
			behance: '#131418',
			snapchat: '#fffc00',
		},
	},
})
