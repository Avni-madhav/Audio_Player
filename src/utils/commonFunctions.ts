export const convertSecondsToMinutes = (
  totalSeconds: number,
): string | null => {
  if (totalSeconds < 0 || isNaN(totalSeconds)) {
    return null; // Handle invalid input gracefully
  }

  let mins = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (Math.trunc(totalSeconds) % 60).toString().padStart(2, '0');

  if (secs) {
    return `${mins}:${secs}`;
  } else {
    return null;
  }
};
