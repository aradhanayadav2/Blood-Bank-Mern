export const updateInventoryStatus = (inventory) => {
  const today = new Date();

  let healthy = 0;
  let nearExpiry = 0;
  let expired = 0;

  inventory.forEach((item) => {
    const expiryDate = new Date(item.expiry);

    const diffTime = expiryDate - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (expiryDate < today) {
      expired += item.units;
    } else if (diffDays <= 3) {
      nearExpiry += item.units;
    } else {
      healthy += item.units;
    }
  });

  return { healthy, nearExpiry, expired };
};