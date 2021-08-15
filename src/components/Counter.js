import classes from "./Counter.module.css";
//connect => use for class components, useSelector is a hook for functional components
import { useSelector, useDispatch } from "react-redux";

const increaseByValue = 10;
//changes to the redux store will cause this component to re-render and get updated
const Counter = () => {
  //allows you to get a slice of the state
  const counter = useSelector((state) => state.counter);
  const isCounterVisibile = useSelector((state) => state.isCounterVisibile);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggleCounter" });
  };

  const increaseHandler = (value) => {
    dispatch({ type: "increase", value });
  };

  const decreaseHandler = (value) => {
    dispatch({ type: "decrease", value });
  };
  return (
    <main className={classes.counter}>
      {isCounterVisibile && (
        <>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={() => increaseHandler(1)}>Increment</button>
            <button onClick={() => decreaseHandler(-1)}>Decrement</button>
            <button onClick={() => increaseHandler(increaseByValue)}>
              Increment by {increaseByValue}
            </button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { connect } from "react-redux";
// import { Component } from "react";
// class CounterClass extends Component {
//   incrementHandler = () => {
//     this.props.increment({ type: "increment" });
//   };
//   decrementHandler = () => {
//     this.props.decrement({ type: "decrement" });
//   };
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
