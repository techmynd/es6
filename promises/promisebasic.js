const willCleanTheRoom = new Promise((resolve, reject) => {
  let cleanRoom = false;

  if (cleanRoom) {
    resolve("room is clean");
  }

  if (!cleanRoom) {
    reject("room is still dirty");
  }
});

willCleanTheRoom
  .then(
    resolve => {
      console.log(resolve);
    },
    reject => {
      console.log(reject);
    }
  )
  .catch(reject => {
    console.log(reject);
  })
  .finally(() => {
    console.log("I will be called regardless");
  });


// https://codepen.io/codepatel/pen/RdBgMz?editors=1111