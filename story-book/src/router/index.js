import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '@/views/Welcome';
import WorldComponent from '@/views/World';
import AboutComponent from '@/entry-points/About';
import AlternativesComponent from '@/entry-points/Alternatives';
import ProposalComponent from '@/entry-points/Proposal';
import OldKingdomComponent from '@/entry-points/OldKingdom';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome,
		children: [
			{
				path: '',
				name: 'FirstPage',
				component: WorldComponent,
			},
			{
				path: 'about',
				name: 'About',
				component: AboutComponent,
			},
			{
				path: 'the-problem/:page',
				name: 'OldKingdom',
				component: OldKingdomComponent,
			},
			{
				path: 'alternatives/:page',
				name: 'Alternatives',
				component: AlternativesComponent,
			},
			{
				path: 'proposal/:page',
				name: 'Proposal',
				component: ProposalComponent,
			},
		],
	},
	{
		path: '/world',
		name: 'World',
		component: () => import(/* webpackChunkName: "about" */ '../views/World.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: '/story-book/',
	routes,
});

export default router;
