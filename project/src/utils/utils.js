import {Color} from "../const";

const RATING_MULTIPLIER = 20;
export const getRatingPercent = (rating) => `${rating.toFixed() * RATING_MULTIPLIER}%`;

//style={{
//  stroke: isFavorite ? Color.FAVORITE_CHECKED : Color.FAVORITE_NOT_CHECKED,
//    fill: isFavorite ? Color.FAVORITE_CHECKED : null,
//}}

