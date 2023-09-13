import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  // pass in a function that determines which piece of data we want to extract from our store.
  // When using the useSelector hook, react redux automatically set up a subscription to the redux store for this component. Meaning changes to the redux store will cause this component to be re executed so that I always have the latest counter
  const counter = useSelector(state => state.counter);
  // Gives us back a dispatch function which I can execute
  // dispatch an action against our redux store.
  const dispatch = useDispatch();
  // for toggle handler
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // payload is added as a parameter = payload:5
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
