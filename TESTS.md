# Automated Tests

Command: `npm test`

The Jest suite exercises the following components:

- `src/shared/components/form/keyboards/number-keyboard.test.tsx`
  - Appending digits updates the composed value.
  - The delete key removes the last digit.
- `src/shared/components/images/custom-image/custom-image.test.tsx`
  - Renders a placeholder image until the primary image finishes loading.
  - Keeps the fallback image visible when the primary image errors.
- `src/shared/components/form/label/label.test.tsx`
  - Displays supplied label text.
  - Returns `null` when no label is provided.
- `src/shared/components/form/input-field/input-field.test.tsx`
  - Renders the label and placeholder text.
  - Uses a custom placeholder when passed.
  - Toggles `secureTextEntry` via the visibility control.
  - Shows error messaging when supplied.
- `src/shared/components/button/button.component.test.tsx`
  - Mounts the button with the provided children.
- `src/shared/components/container/container.test.tsx`
  - Renders child content within the container wrapper.
- `src/screens/landing/components/welcome-text/welcome-text.test.tsx`
  - Displays the landing welcome headline.
- `src/shared/components/text/text.component.test.tsx`
  - Renders the provided text children.

All suites currently pass under Jest using the `jest-expo` preset.
