function blockWebsite() {
  console.log("Waiting for payment..");
}

fetch("http://am-i-paid.vercel.app/api?client=Myfer")
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    if (!post.paid) {
      blockWebsite();
    }
  });
