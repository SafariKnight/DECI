const order = {
  items: ["Item 1", "Item 2", "Item 3"],
  totalCost: 90,
};

// const order = {
//   items: ["Item 1", "Item 2", "Item 3"],
//   totalCost: 90,
// };
function startOrderProcess(order, proccessComplete, handleError) {
  let succesful = true;
  console.log("Order Recieved");
  setTimeout(() => {
    if (order.totalCost > 0 && order.items.length !== 0) {
      console.log("Order Valid");
    } else {
      console.log("Invalid Order");
    }
    if (succesful)
      setTimeout(() => {
        console.log("Order Prepared");
        setTimeout(() => {
          console.log("Order Packaged");
          if (succesful) proccessComplete();
            else handleError(`Order Processing Failed`);
        }, 1000);
      }, 1000);
      else handleError(`Order Validation Failed`);
  }, 2000);
}

startOrderProcess(order, () => {
  console.log("Order Processing Complete")
}, (err) => {
  console.log(err)
});
