1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function



 * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     * 3. What SHOULD be in our dependencies array in this case?



     ### Quiz:

#### 1. What will happen if I put back our Star Wars API call into the effect function?

If you put the Star Wars API call into the `useEffect` function, the effect will run every time the component mounts and whenever the dependencies specified in the dependencies array change.

For example:

```javascript
useEffect(() => {
  fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      console.log(data); // This will log the fetched data to the console
    });
}, []); // Assuming an empty dependencies array
```

If the dependencies array is empty (`[]`), the API call will only be made once when the component mounts. If there are dependencies in the array, the API call will be made whenever any of those dependencies change.

#### 2. How will the useEffect be different if I use `setStarWarsData()` instead of `console.log()`?

If you use `setStarWarsData()` instead of `console.log()`, the effect will not just log the data but also update the component's state with the fetched data. This state update will cause the component to re-render with the new data.

Example:

```javascript
const [starWarsData, setStarWarsData] = useState(null);

useEffect(() => {
  fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      setStarWarsData(data); // This will update the state with the fetched data
    });
}, []);
```

When `setStarWarsData(data)` is called, the `starWarsData` state will be updated, triggering a re-render of the component with the new data.

#### 3. What SHOULD be in our dependencies array in this case?

In this case, the dependencies array should include any variables that the effect depends on. Since the API call does not depend on any external variables (it's static), you can safely use an empty dependencies array to ensure the effect only runs once when the component mounts.

Example with an empty dependencies array:

```javascript
useEffect(() => {
  fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      setStarWarsData(data);
    });
}, []); // Empty array means the effect runs once on mount
```

If there were any variables that the effect depended on, you would include them in the dependencies array. For instance, if the API endpoint depended on a `characterId` state, you would include `[characterId]` in the dependencies array:

```javascript
const [characterId, setCharacterId] = useState(1);

useEffect(() => {
  fetch(`https://swapi.dev/api/people/${characterId}/`)
    .then(response => response.json())
    .then(data => {
      setStarWarsData(data);
    });
}, [characterId]); // Effect will run whenever `characterId` changes
```