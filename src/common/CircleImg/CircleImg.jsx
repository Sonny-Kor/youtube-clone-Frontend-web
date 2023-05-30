import React from 'react';

import styles from './CircleImg.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

/**
 * 원 모양 이미지
 *
 * @param {{src: string, alt?: string, objectFit: 'cover'|'contain', padding: number}} props
 */
function CircleImg(props) {
  const {
    className,
    src,
    alt,
    objectFit = 'cover',
    padding = 0,
    ...rest
  } = props;

  const style = {
    objectFit: ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(
      objectFit
    )
      ? objectFit
      : 'cover',
    padding: padding
  };
  return (
    <div className={cx('CircleImg', className)} {...rest}>
      <img
        src={src}
        alt={alt}
        onError={e => {
          e.target.src = '/images/blank.png';
        }}
      />
    </div>
  );
}

export default CircleImg;
