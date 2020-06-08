<template>
	<div class="container" @keyup.left="prevPage()" @keyup.right="nextPage()">
		<div class="prev" @click="prevPage()">&lt;</div>
		<router-view />
		<div class="next" @click="nextPage()">&gt;</div>
	</div>
</template>

<script>
import { EventBus } from '../services/EventBus';
const pages = [
	{ pathName: 'FirstPage', params: {} },
	{ pathName: 'About', params: {} },
	{ pathName: 'OldKingdom', params: { page: 1 } },
	{ pathName: 'OldKingdom', params: { page: 2 } },
	{ pathName: 'OldKingdom', params: { page: 3 } },
	{ pathName: 'Alternatives', params: { page: 1 } },
	{ pathName: 'Alternatives', params: { page: 2 } },
	{ pathName: 'Alternatives', params: { page: 3 } },
	{ pathName: 'Alternatives', params: { page: 4 } },
	{ pathName: 'Proposal', params: { page: 1 } },
	{ pathName: 'Proposal', params: { page: 2 } },
	{ pathName: 'Proposal', params: { page: 3 } },
	{ pathName: 'Proposal', params: { page: 4 } },
	{ pathName: 'Proposal', params: { page: 5 } }
];
export default {
	computed: {
		currentPage: {
			cache: false,
			get() {
				const currentRoute = this.$router.currentRoute;
				return pages.findIndex(
					item =>
						item.pathName === currentRoute.name &&
						JSON.stringify(item.params) === JSON.stringify(currentRoute.params)
				);
			}
		}
	},
	methods: {
		prevPage() {
			if (this.currentPage > 0) {
				this.$router.push({
					name: pages[this.currentPage - 1].pathName,
					params: pages[this.currentPage - 1].params
				});
			}
		},
		nextPage() {
			if (this.currentPage < pages.length - 1) {
				this.$router.push({
					name: pages[this.currentPage + 1].pathName,
					params: pages[this.currentPage + 1].params
				});
			} else {
				EventBus.$emit('navigate-away', '/landing-page');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;

	.prev,
	.next {
		height: 100%;
		text-align: center;
		font-size: 2rem;
		font-stretch: condensed;
		font-weight: 700;
		opacity: 0.4;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		padding: 20px;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
			background-color: #cececeaa;
		}
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}
}
</style>
