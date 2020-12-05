import fs from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

const getAllPosts = () =>
	fs.readdirSync('src/content/photos').map((fileName) => {
		const post = fs.readFileSync(
			path.resolve('src/content/photos', fileName),
			'utf-8'
		);
		return grayMatter(post).data;
	});

export function get(response) {
	response.writeHead(200, {
		'Content-Type': 'application/json',
	});
	const posts = getAllPosts();
	response.end(JSON.stringify(posts));
}
