import styles from './ButtonPrevArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonPrevArrow({ onClick }) {
    return (
        <div className={cx('container')} onClick={onClick}>
            <button type="button">
                <span></span>
            </button>
        </div>
    );
}

export default ButtonPrevArrow;
