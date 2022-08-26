import styles from './ButtonNextArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonNextArrow({ onClick }) {
    return (
        <div className={cx('container')} onClick={onClick}>
            <button type="button">
                <span></span>
            </button>
        </div>
    );
}

export default ButtonNextArrow;
