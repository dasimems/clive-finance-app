# Performance Optimization

- I focused on keeping the app responsive on everyday Android and iOS devices.
- Wrapped the screens, modals, components, and shared building blocks with React memoization so they rerender only when their props change.
- Stabilized event handlers with `useCallback` to avoid creating new function references that would invalidate memoized children.
- Relied on Zustand for user session data so only data that actually need to react to state changes are notified, instead of triggering multiple data update and also preventing context hell.
- Memoized derived values such as OTP box sizing, grouped number keys, and formatted countdown strings so they are recalculated only when their inputs change.
- Ensured countdown timers clean up their intervals as soon as they finish or the view unmounts, preventing background timers from recycling or re-running.
- Delayed the option lists inside select modals until the modal is opened, keeping heavy touchable trees out of the main render path most of the time.
- Used the React Native profiler tool during development to confirm lower render counts and steady frame rate after the optimizations.
- Enabled `why-did-you-render` for development builds via `wdyr.ts` so avoidable re-renders are logged automatically during local testing.
