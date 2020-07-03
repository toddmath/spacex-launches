const min = 60 * 1000
const hour = min * 60
const day = hour * 24
const month = day * 30
const year = day * 365

const ms = {
  min,
  hour,
  day,
  month,
  year,
}

/**
 * Displays the difference (as en English sentence) between two Date objects
 * @see https://stackoverflow.com/a/6109105/2391795
 */
export default function timeDifference(current: Date, previous: Date): string {
  const elapsed = +current - +previous
  const lessThen = {
    min: `${Math.floor(elapsed / 1000)} seconds ago`,
    hour: `${Math.floor(elapsed / min)} minutes ago`,
    day: `${Math.floor(elapsed / hour)} hours ago`,
    month: `approximately ${Math.floor(elapsed / day)} days ago`,
    year: `approximately ${Math.floor(elapsed / month)} months ago`,
    default: `approximately ${Math.floor(elapsed / year)} years ago`,
  }

  Object.entries(ms).forEach(([period, amount]) => {
    if (elapsed < amount) return lessThen[period]
  })

  return lessThen.default
}
