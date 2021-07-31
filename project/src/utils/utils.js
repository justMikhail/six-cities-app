const RATING_MULTIPLIER = 20;
export const getRatingPercent = (rating) => `${rating.toFixed() * RATING_MULTIPLIER}%`;

