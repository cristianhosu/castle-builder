const fs = require('fs');
let path = require('path');
const glob = require('glob');

if (!fs.existsSync('dist')) {
	fs.mkdirSync('dist');
} else {
	const contents = fs.readdirSync(`${__dirname}/dist`);
	for (const file of contents) {
		fs.unlinkSync(path.join(`${__dirname}/dist`, file));
	}
}
fs.readdir(`${__dirname}/src`, { encoding: 'UTF-8' }, (err, files) => {
	const componentFolders = files.filter((f) => {
		return f.endsWith('-component');
	});

	console.log(componentFolders);

	componentFolders.forEach((folder) => {
		console.log(`${__dirname}/src/${folder}`);
		glob(`${__dirname}/src/${folder}/*.js`, function (err, files) {
			console.log(files);
			let js = '';
			files.forEach((item) => {
				buildFile(`${__dirname}/src/${folder}`, item);
			});
		});
	});
});

function buildFile(basePath, jsPath) {
	const js = fs.readFileSync(`${jsPath}`, 'utf8');

	const templates = js.match(/<!-- ref:(.*) -->/gm); // /<!-- ref:(.*) -->/gm.exec(js);
	console.log(JSON.stringify(templates));

	let composedFile = js;

	templates.forEach((item) => {
		const url = /<!-- ref:((.*\.html)|(.*\.css)) -->/gm.exec(item);
		const file = fs.readFileSync(path.resolve(basePath, url[1]), 'utf8');
		composedFile = composedFile.replace(url[0], file.trim());
	});
	fs.writeFileSync(`${__dirname}/dist/${path.basename(jsPath)}`, composedFile);
}
