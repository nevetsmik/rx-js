const Observable = require("rxjs").Observable;

// Observable – data stream that pushes data over time
// Observer – consumer of an observable stream, how to react to each event
// Subscriber – connects observer with observable
// Operator – a function for the en-route data transformation

const subscription = (observer) => {
  observer.next(1); /// 1 gets passsed to the observer's next function
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
};
// Create an observable that upon subscription will execute the subscription function
// The observer of the subscription will determine how to react to each event
const observable = new Observable(subscription);

// Observer - how to react to each event
const observer = {
  next: (x) => console.log(`Observer got a next value: ${x}`),
  error: (err) => console.error(`Observer got an error: ${err}`),
  complete: () => console.log("Observer got a complete notification"),
};

// Create a subscription that connects the observable to the observer
// The observable will emit 1, 2, 3, 4 with a second elapsed between 3 and 4 and then complete
// The observer dictates how to react to each number passed
const subscription = observable.subscribe(observer);
// subscription.unsubscribe();

// const observable = new Observable(function subscribe(subscriber) {
//   // Keep track of the interval resource
//   const intervalId = setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);

//   // Provide a way of canceling and disposing the interval resource
//   return function unsubscribe() {
//     clearInterval(intervalId);
//   };
// });
// const subscription = observable.subscribe((x) => console.log(x));
// subscription.unsubscribe();
