const template = document.createElement('template');
template.innerHTML = `<!-- ref:./main.html -->`;

export default class MainComponent extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define('castle-app', MainComponent);
