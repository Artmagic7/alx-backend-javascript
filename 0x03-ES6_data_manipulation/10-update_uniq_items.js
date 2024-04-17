export default function updateUniqueItems(mapItems) {
  if (!(mapItems instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of mapItems) {
    if (quantity === 1) mapItems.set(item, 100);
  }
}
