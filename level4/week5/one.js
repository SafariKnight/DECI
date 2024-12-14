function wait(time) {
  start = Date.now()
  while (Date.now() <= start + time){}
}

function executeTasksSync() {
  console.log("Task 1 started")
  wait(2000)
  console.log("Task 2 started")
  wait(1000)
  console.log("All tasks completed")
}


function executeTasksAsync(onFinish) {
  console.log("Task 1 started (async)")
  setTimeout(() => {
    console.log("Task 2 started (async)")
    setTimeout(onFinish, 1000)
  }, 2000)
}

executeTasksSync()
executeTasksAsync(() => {
    console.log("All tasks finished (async)")
})
