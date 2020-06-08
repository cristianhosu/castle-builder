const template = document.createElement('template');
template.innerHTML = `<!-- ref:./main.html -->`;

const styles = document.createElement('style');
styles.innerHTML = `<!-- ref:./main.css -->`;

export default class MainComponent extends HTMLElement {
	navigateAwayEvent = new CustomEvent('navigate-away', { detail: [] });
	shadow = null;
	constructor() {
		super();

		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(styles);
		this.shadow.appendChild(template.content.cloneNode(true));
		this.bindEvents();
	}

	bindEvents() {
		this.shadow.querySelector('#closeButton').addEventListener('click', () => {
			this.navigateAwayEvent.detail.push('/landing-page');
			this.dispatchEvent(this.navigateAwayEvent);
		});
		this.shadow.querySelector('.dungeon-entrance').addEventListener('click', () => {
			// show dungeon
			console.log('GoTo Dungeon');
			this.shadow.querySelector('#dungeon').classList.add('show');
		});

		this.shadow.querySelector('.library-entrance').addEventListener('click', () => {
			// show library
			console.log('GoTo Library');
			this.shadow.querySelector('#library').classList.add('show');
		});

		this.shadow.querySelector('.throne-entrance').addEventListener('click', () => {
			// show throne
			console.log('GoTo Throne');
			this.shadow.querySelector('#throne').classList.add('show');
		});
		this.shadow.querySelectorAll('.popup').forEach((item) => {
			item.addEventListener('click', () => {
				this.shadow.querySelector('.popup.show').classList.remove('show');
			});
		});
	}
}

customElements.define('castle-app', MainComponent);
