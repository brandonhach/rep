const placeHolderList = ["What's the first rule of Fight Club?"];

export const HeroConfig = {
	title: 'Lookup users here.',
	searchPlaceholder: placeHolderList,
	description: '',
	placeholders: [
		'Enter a name to check their reputation',
		'Who do you want to verify?',
		"Search for someone's authenticity",
		'Is this person safe to interact with?',
		'Look up a user to confirm their identity',
	],
};

export const ProfileConfig = {
	description: `Yo, I'm a Rolex seller and collector. Always on the lookout for those collector's editions, so if you got one, hit me up. Besides that, I’ve got a stash of virtual items up for grabs – rare skins, in-game gear, you name it. If you’re into Rolex deals, we can handle that over the counter too. Just slide into my DMs and let’s make it happen!
	`,
	bgImage:
		'https://images.unsplash.com/photo-1582414004129-a955c6087f5e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const MoodboardImages = [
	{
		image: 'https://images.unsplash.com/photo-1606391376625-24f312264fe9?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1627860284764-c92502f39afb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1639444100617-810c1df608a8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1598468852802-8871fdd45069?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlcm1lc3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1618215650201-8d552591218d?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1581017316471-1f6ef7ce6fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		image: 'https://images.unsplash.com/photo-1498709112912-9be3173d30be?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

export const MoodboardConfig = {
	images: MoodboardImages,
};

const Reps = [
	{
		image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Hart',
		rep: '12',
		business: 'Bought a few keys for cheap with cash in CSGO & TF2.',
		transaction: ['Trading', 'CSGO', 'TF2'],
		rating: true,
		country: 'US',
	},
	{
		image: 'https://images.unsplash.com/photo-1485394735640-56c0356b62cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxqYXBhbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
		name: 'Kiryu',
		rep: '31',
		business: 'sold my Rolex with a middleman for cash. went smooth',
		transaction: ['OTC'],
		rating: true,
		country: 'JP',
	},
	{
		image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'GERMAN',
		rep: '5',
		business: 'DANKE SCHÖN!!! Transaction on Paypal ',
		transaction: ['Paypal', 'OTC'],
		rating: true,
		country: 'DE',
	},
	{
		image: 'https://images.unsplash.com/photo-1690988021906-72999a1711ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGltJTIwaG9ydG9ufGVufDB8fDB8fHww',
		name: 'TimHorton',
		rep: '27',
		business: 'Traded in-game items for a rare skin.',
		transaction: ['Trading', 'Skins'],
		rating: true,
		country: 'CA',
	},
	{
		image: 'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'SquidSashimi',
		rep: '321',
		business: 'Bought a couple of rolexes. Recommended!',
		transaction: ['OTC'],
		rating: true,
		country: 'KR',
	},
	{
		image: 'https://images.unsplash.com/photo-1668042583100-15aa5e323238?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Mindaco',
		rep: '122',
		business: 'Sold a couple of CD keys of Cyberpunk 2077 & more. Trade was quick and easy. Highly recommend',
		transaction: ['Trading', 'CD keys'],
		rating: true,
		country: 'MX',
	},
	{
		image: 'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90fGVufDB8fDB8fHww',
		name: 'Mahaluto',
		rep: '189',
		business:
			'Backing out of a trade agreement: unadded me and then listing item for sale on website https://imgur.com/a/fHRGZmW',
		transaction: ['Trading', 'OTC'],
		rating: false,
		country: 'CA',
	},
	{
		image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Sihanouk',
		rep: '4',
		business: 'Bought a rolex through a middleman. Fast & Smooth thank you',
		transaction: ['OTC', 'Crypto'],
		rating: true,
		country: 'KHM',
	},
];

export const RepConfig = {
	Reps: Reps,
};

const Affiliation = [
	{
		affiliationTitle: 'Rolex Central',
		role: 'Discord Moderator',
		service: 'Discord',
		serviceImage:
			'https://banner2.cleanpng.com/20180130/rlq/kisspng-rolex-datejust-rolex-submariner-watch-colored-gold-rolex-watch-png-file-5a713e486b2244.8477442915173709524388.jpg',
		serviceUrl: '',
		verfied: false,
	},
	{
		affiliationTitle: 'Esport City',
		role: 'Discord Moderator',
		service: 'Discord',
		serviceImage:
			'https://png.pngtree.com/png-clipart/20230508/original/pngtree-vector-esports-gaming-logo-png-image_9150467.png',
		serviceUrl: '',
		verfied: false,
	},
	{
		affiliationTitle: 'BondstreetGaming[BG]',
		role: 'Admin',
		service: 'CSGO',
		serviceImage:
			'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		serviceUrl: '',
		verfied: false,
	},
	{
		affiliationTitle: `Joe's Drivestream`,
		role: 'Community Manager',
		service: 'Twitch',
		serviceImage:
			'https://images.unsplash.com/photo-1709417904995-cdc49ade98b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZSUyMHN5bWJvbHxlbnwwfHwwfHx8MA%3D%3D',
		serviceUrl: '',
		verified: true,
	},
	{
		affiliationTitle: 'r/water',
		role: 'Subreddit Moderator',
		service: 'Reddit',
		serviceImage:
			'https://images.unsplash.com/photo-1563374928-66e57628d1b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D',
		serviceUrl: '',
		verified: true,
	},
];

export const AffiliationConfig = {
	Affiliation: Affiliation,
};

const comments = [
	{
		name: 'GamerGuy2024',
		image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		datetime: '05/27/2024 10:48AM',
		comment: 'yo dm me',
		emotes: ['✉️', '👀'],
	},
	{
		name: 'PixelPusher',
		image: 'https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		datetime: '04/11/2024 9:48PM',
		comment: 'this guy mane',
		emotes: ['😎'],
	},
	{
		name: 'SneakyNinja',
		image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		datetime: '04/10/2024 1:48PM',
		comment: 'good',
		emotes: ['🎃', '🙀', '👍'],
	},
	{
		name: 'RolexHunter',
		image: 'https://images.unsplash.com/photo-1611243705491-71487c2ed137?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		datetime: '03/21/2024 3:48AM',
		comment: `⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠁⠄⠄⠈⠙⠻⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿
  ⣿⣿⣿⣿⡿⠃⠄⠄⠄⢀⣀⣀⡀⠄⠄⠄⠄⠄⠄⠄⠈⢿
  ⣿⣿⣿⡟⠄⠄⠄⠄⠐⢻⣿⣿⣿⣷⡄⠄⠄⠄⠄⠄⠄⠄⠈
  ⣿⣿⣿⠃⠄⠄⠄⢀⠴⠛⠙⣿⣿⡿⣿⣦⠄⠄⠄⠄⠄⠄
  ⣿⣿⠃⠄⢠⡖⠉⠄⠄⠄⣠⣿⡏⠄⢹⣿⠄⠄⠄⠄⠄⢠
  ⣿⠃⠄⠄⢸⣧⣤⣤⣤⢾⣿⣿⡇⠄⠈⢻⡆⠄⠄⠄⠄⣾
  ⠁⠄⠄⠄⠈⠉⠛⢿⡟⠉⠉⣿⣷⣀⠄⠄⣿⡆⠄⠄⢠⣿
  ⠄⠄⠄⠄⠄⠄⢠⡿⠿⢿⣷⣿⣿⣿⣿⣿⠿⠃⠄⠄⣸⣿
  ⠄⠄⠄⠄⠄⢀⡞⠄⠄⠄⠈⣿⣿⣿⡟⠁⠄⠄⠄⠄⣿⣿
  ⠄⠄⠄⠄⠄⢸⠄⠄⠄⠄⢀⣿⣿⡟⠄⠄⠄⠄⠄⢠⣿⣿
  ⠄⠄⠄⠄⠄⠘⠄⠄⠄⢀⡼⠛⠉⠄⠄⠄⠄⠄⠄⣼⣿⣿
  ⠄⠄⠄⠄⠄⡇⠄⠄⢀⠎⠄⠄⠄⠄⠄HAVE. ⠙⢿⣿
  ⠄⠄⠄⠄⢰⠃⠄⢀⠎⠄⠄⠄⠄FUN.TODAY. ⠙`,
		emotes: [],
	},
	{
		name: 'CSGOKing',
		image: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		datetime: '02/27/2024 10:48AM',
		comment: 'yo check your trades',
		emotes: ['📬'],
	},
];

export const CommentsConfig = {
	comments: comments,
};

const posts = [
	{
		title: 'Rolex Confetti Duo',
		image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Shade of brown & Black. Looking for offers instead.',
		price: 'Offers',
		postType: 'Selling',
	},
	{
		title: 'Seiko Black&Silver',
		image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Seiko Black&Silver SARB033, looking to add to my collection.',
		price: '$5,000',
		postType: 'Buying',
	},

	{
		title: 'Mcclaren 720s',
		image: 'https://images.unsplash.com/photo-1594950195709-a14f66c242d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Second owner of this mad car.',
		price: '$213,200',
		postType: 'Selling',
	},

	{
		title: 'K-Pop tickets in Osaka, JP',
		image: 'https://images.unsplash.com/photo-1515139372923-c923c9e9a18c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Two tickets, $500 cheaper than market price',
		price: '$2,200',
		postType: 'Selling',
	},
	{
		title: 'Orient Mako II USA',
		image: 'https://images.unsplash.com/photo-1620421895918-b4e8c86648fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Orient Mako II USA White Dial dive watch on a black leather nato strap.',
		price: '$13,200',
		postType: 'Buying',
	},
];

export const PostsConfig = {
	posts: posts,
};

export const SubscriptionPlansConfig = [
	{
		title: 'Noob',
		badge: '',
		price: '0',
		duration: 'default',
		checkList: ['Code-based authenticator'],
		crossList: [
			'Enhanced Profile Customization',
			'Vouchers',
			'Premium Badge',
			'Trade Post',
			'Priority Search',
			'DirectMail Messaging',
		],
		disabled: true,
	},
	{
		title: 'Premium+',
		badge: 'Supporter',
		price: '6',
		duration: 'lifetime',
		checkList: [
			'Code-based authenticator',
			'Enhanced Profile Customization',
			'Vouchers',
			'Premium Badge',
			'Trade Post',
			'Priority Search',
			'DirectMail Messaging',
		],
		crossList: [],
		disabled: false,
	},
	{
		title: 'Premium+',
		badge: 'Subscription',
		price: '5',
		duration: 'month',
		checkList: [
			'Code-based authenticator',
			'Enhanced Profile Customization',
			'Vouchers',
			'Premium Badge',
			'Trade Post',
			'Priority Search',
			'DirectMail Messaging',
		],
		crossList: [],
		disabled: true,
	},
];
