const counter = () => {
  let i = 0;

  return {
    add(val) {
      i += val;
      return this;
    },
    subtract(val) {
      i -= val;
      return this;
    },
    print() {
      return i;
    }
  };
};

const counterObj = counter();

console.log(
  counterObj
    .add(1)
    .subtract(4)
    .print()
);

// https://codepen.io/codepatel/pen/MxzMgL?editors=1111