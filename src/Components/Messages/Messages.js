import styles from './Messages.module.scss';
import classNames from 'classnames/bind';
import { TbMessageCircle } from 'react-icons/tb';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Messages() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const message = document.querySelector('#Messages');
            message.style.display = 'block';
        }, 4000);
        return () => clearTimeout(timer);
    });
    return (
        <div className={cx('Messages')} id="Messages">
            <div className={cx('button-mesages')}>
                <div className={cx('icon-mesages-container')}>
                    <TbMessageCircle className={cx('icon-mesages')} />
                </div>
            </div>
        </div>
    );
}

export default Messages;
