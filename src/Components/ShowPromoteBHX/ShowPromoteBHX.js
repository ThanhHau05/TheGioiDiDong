import styles from './ShowPromoteBHX.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ShowPromoteBHX() {
    return (
        <div className={cx('showPromoteBHX-container')}>
            <div className={cx('title')}>
                <span className={cx('dotnew')}>
                    <span className={cx('dotnew-animation')}></span>
                </span>
            </div>
        </div>
    );
}

export default ShowPromoteBHX;
