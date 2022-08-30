import styles from './ButtonNextArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonNextArrow({ onClick, classdeal }) {
    return (
        <div className={cx('container', classdeal && 'container-deal')} onClick={onClick}>
            <button type="button">
                <span></span>
            </button>
        </div>
    );
}

export default ButtonNextArrow;
