// Generates a unique Child ID for JANM SETU
// Example: JANMSETU-CH-A9X2KQ

export function generateChildId() {
  return (
    "JANMSETU-CH-" +
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
}
