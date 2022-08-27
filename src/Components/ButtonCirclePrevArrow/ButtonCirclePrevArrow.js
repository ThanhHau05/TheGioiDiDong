import styles from './ButtonCirclePrevArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonCirclePrevArrow({ onClick }) {
    return (
        <div className={cx('prev-container')} onClick={onClick}>
            <span></span>
        </div>
    );
}

export default ButtonCirclePrevArrow;
