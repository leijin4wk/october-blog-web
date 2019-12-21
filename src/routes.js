import loadable from '@loadable/component';
const IndexPageComponent = loadable(() =>
	import('./routes/IndexPage')
);
const ArticleDetailPageComponent = loadable(() =>
	import('./routes/ArticleDetailPage')
);
const MusicPageComponent = loadable(() =>
	import('./routes/MusicPage')
);
const AboutPage = loadable(() =>
	import('./routes/AboutPage')
);

const routes = [
	{
		path: '/',
		component: IndexPageComponent,
		exact: true
	},
	{
		path: '/article/:id',
		component: ArticleDetailPageComponent,
		exact: true
	},
	{
		path: '/music',
		component: MusicPageComponent,
		exact: true
	},{
		path: '/about',
		component: AboutPage,
		exact: true
	}
];

export default routes;
