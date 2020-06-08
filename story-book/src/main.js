import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import HomeComponent from './entry-points/Home';
// import AboutComponent from './entry-points/About';
// import AlternativesComponent from './entry-points/Alternatives';
// import ProposalComponent from './entry-points/Proposal';

Vue.config.productionTip = false;

const wrappedHome = wrap(Vue, HomeComponent);
window.customElements.define('story-book', wrappedHome);

// const wrappedAbout = wrap(Vue, AboutComponent);
// window.customElements.define('story-book-about', wrappedAbout);

// const wrappedAlternatives = wrap(Vue, AlternativesComponent);
// window.customElements.define('story-book-alternatives', wrappedAlternatives);

// const wrappedProposal = wrap(Vue, ProposalComponent);
// window.customElements.define('story-book-proposal', wrappedProposal);

// new Vue({
// 	router,
// 	render: (h) => h(App),
// }).$mount('#app');
