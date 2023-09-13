import {createSlice} from '@reduxjs/toolkit'


const initialCounterState = { counter: 0, showCounter: true };

// we're preparing a slice of our global state.
// When we have different pieces of state which are not related, we could create different slices.
const counterSlice = createSlice({
    name: 'counter', 
    initialState: initialCounterState,
    reducers: {
        // these methods will automatically be called for you depending on which action was triggered. So I don't need to write the if statements anymore
        increment(state) {
            // internally our mutated state is translated into immutable code by redux tool kit. Somewhat allowing us to mutate the state.
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;