async function wait(timeout) {
  await new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

const order = {
  items: ["Item 1", "Item 2", "Item 3"],
  totalCost: 90,
};

// const order = {
//   items: ["Item 1", "Item 2", "Item 3"],
//   totalCost: 90,
// };
async function startOrderProcess(order, proccessComplete, handleError) {
  let succesful = true;
  console.log("Order Recieved");
  await wait(2000);
  if (order.totalCost > 0 && order.items.length !== 0) {
    console.log("Order Valid");
  } else {
    console.log("Invalid Order");
  }
  if (succesful) {
    await wait(1000);
    console.log("Order Prepared");
    await wait(1000);
    console.log("Order Packaged");
    if (succesful) {
      proccessComplete();
    } else handleError(`Order Processing Failed`);
  } else handleError(`Order Validation Failed`);
}

startOrderProcess(
  order,
  () => {
    console.log("Order Processing Complete");
  },
  (err) => {
    console.error(err);
  },
);
