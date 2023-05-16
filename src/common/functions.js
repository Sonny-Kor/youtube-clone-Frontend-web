/**
 * @description 조회수나 구독자수와 같은 큰 수를 포맷팅된 문자열로 변환합니다.
 * @param {number} countNumber
 * @returns {string}
 */
const formatCountNumber = countNumber => {
  if (countNumber < 1000) {
    return countNumber;
  } else if (countNumber < 10000) {
    return parseInt(countNumber / 100) / 10 + ' 천';
  } else if (countNumber < 100000000) {
    return parseInt(countNumber / 1000) / 10 + ' 만';
  } else if (countNumber < 1000000000000) {
    return parseInt(countNumber / 10000) / 10 + ' 억';
  }
  return countNumber;
};

/**
 * @description timestamp가 현재 시각으로부터 얼마나 오래되었는지를 상대 시간 문자열로 변환합니다.
 * @param {number} timestamp
 * @return {string}
 */
const formatTime = timestamp => {
  const now = new Date();

  const diff = now.getTime() - timestamp * 1000;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 12 * month;

  if (diff < minute) {
    return '방금 전';
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}분 전`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}시간 전`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}일 전`;
  } else if (diff < year) {
    const months = Math.floor(diff / month);
    return `${months}달 전`;
  } else {
    const years = Math.floor(diff / year);
    return `${years}년 전`;
  }
};

/**
 * @description 좋아요 수나 댓글 수등 천 단위 마다 콤마를 넣어 문자열로 변환합니다.
 * @param {number} countNumber
 * @return {string}
 */
const formatComma = countNumber => {
  return countNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export { formatCountNumber, formatTime, formatComma };
