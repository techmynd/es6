const getReward = new Promise((resolve, reject) => {
  let gotReward = false;
  if (gotReward) {
    resolve("received reward");
  } else {
    reject(":( no rewards");
  }
});

const removeGarbage = new Promise((resolve, reject) => {
  let removeGarbage = false;
  if (removeGarbage) {
    resolve("garbage removed");
  } else {
    reject("garbage not removed");
  }
});
const willCleanTheRoom = new Promise((resolve, reject) => {
  let roomIsClean = true;
  if (roomIsClean) {
    resolve("room is clean");
  } else {
    reject("room is still dirty");
  }
});

willCleanTheRoom
  .then(resolveMessage => {
    console.log(resolveMessage);
    return removeGarbage;
  })
  .then(resolveMessage => {
    console.log(resolveMessage);
    return getReward;
  })

  .then(resolveMessage => {
    console.log(resolveMessage);
    console.log("all done");
  })
  .catch(rejectMessage => {
    console.log(rejectMessage);
  });



// https://codepen.io/codepatel/pen/mojMbJ?editors=1111