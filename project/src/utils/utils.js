const RATING_MULTIPLIER = 20;
export const getRatingPercent = (rating) => `${rating.toFixed() * RATING_MULTIPLIER}%`;

export const ucFirst = (str) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

