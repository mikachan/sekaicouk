import fs from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

const getAllPosts = () =>
	fs.readdirSync('src/content/photography').map((fileName) => {
		const post = fs.readFileSync(
			path.resolve('src/content/photography', fileName),
			'utf-8'
		);
		return grayMatter(post).data;
	});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});
	const posts = getAllPosts();
	res.end(JSON.stringify(posts));
}
