function blockWebsite() {
	console.log('Waiting for payment..');
}

fetch('http://localhost:5173/api?client=Myfer')
	.then((data) => {
		return data.json();
	})
	.then((post) => {
		if (!post.paid) {
			blockWebsite();
		}
	});
