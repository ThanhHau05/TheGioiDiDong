import styles from './ButtonPrevArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonPrevArrow({ onClick, classdeal }) {
    return (
        <div className={cx('container', classdeal && 'container-deal')} onClick={onClick}>
            <button type="button">
                <span></span>
            </button>
        </div>
    );
}

export default ButtonPrevArrow;
