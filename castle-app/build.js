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
		glob(`${__dirname}/${folder}/*.js`, function (err, files) {
			console.log(files);
			let js = '';
			files.forEach((item) => {
				buildFile(`${__dirname}/${folder}`, item);
			});
		});
	});
});

function buildFile(basePath, jsPath) {
	const js = fs.readFileSync(`${jsPath}`, 'utf8');
	const hasTemplate = /<!-- ref:(.*) -->/gm.exec(js);
	const file = fs.readFileSync(path.resolve(basePath, hasTemplate[1]), 'utf8');

	let composedFile = js.replace(hasTemplate[0], file.trim());
	fs.writeFileSync(`${__dirname}/dist/${path.basename(jsPath)}`, composedFile);
}
