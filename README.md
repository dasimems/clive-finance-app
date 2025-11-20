# Thought Process  

### Layout

- The choosen layout is of the feature architectural pattern since it is a finance application which has the highest probability of getting large over time and managing many features.

- Each Feature would have it's own test, state, components, and variables inside it making it a independent application of it's own that enhance debugging and maintainability
  
- Each feature is accompanied by the folder of `component`, `screen`, `state`, `utils`
  
- Each component is wrapped in memo to enhance performance.
