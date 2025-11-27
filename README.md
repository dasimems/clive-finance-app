# Thought Process  

### Layout

- The choosen layout is of the feature architectural pattern since it is a finance application which has the highest probability of getting large over time and managing many features.

- Each Feature would have it's own test, state, components, and variables inside it making it a independent application of it's own that enhance debugging and maintainability
  
- Each feature is accompanied by the folder of `component`, `screen`, `state`, `utils`
  
- Each component is wrapped in memo to enhance performance.

## How to run

### Running the Project

1. **Install dependencies**

   Run the following command in the project root:

   ```
   npm install
   ```

2. **Start the Metro Bundler**

   ```
   npm start
   ```
   _or, also:_
   ```
   npx expo start
   ```

3. **Run on your preferred platform**

    ```
    npx expo prebuild

    ```

   - **iOS:**
     ```
     npx expo run:ios
     ```
     _(Requires macOS and Xcode)_

   - **Android:**
     ```
     npx expo run:android
     ```

4. **Run tests**

   ```
   npm test
   ```

For more details on configuration, see [`app.json`](app.json) and [`eas.json`](eas.json).

