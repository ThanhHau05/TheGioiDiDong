import styles from './ButtonCircleNextArrow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ButtonCircleNextArrow({ onClick }) {
    return (
        <div className={cx('next-container')} onClick={onClick}>
            <span></span>
        </div>
    );
}

export default ButtonCircleNextArrow;
