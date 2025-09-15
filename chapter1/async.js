// 非同期処理の復習

function fetchData() {
  return new Promise((resolve) => {
    console.log('データ習得中...');
    setTimeout(() => {
      resolve('データが届きました');
    }, 1000);
  });
}

// promis
fetchData().then((result) => {
  console.log(result);
});

// async / await
async function main() {
  const result = await fetchData();
  console.log(result);
}

main();
