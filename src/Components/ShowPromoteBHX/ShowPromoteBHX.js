import styles from './ShowPromoteBHX.module.scss';
import classNames from 'classnames/bind';
import logobhx from './logoBHX.png';
import iconarrow from './ArrowCircleRight.png';
import { ImagesBHX } from '~/Images/BHX';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function ShowPromoteBHX() {
    const _handleProduct = () => {
        return ImagesBHX.map((item, index) => (
            <motion.div key={index} className={cx('image-product-container')}>
                <img src={item} alt="" />
            </motion.div>
        ));
    };
    return (
        <div className={cx('showPromoteBHX-container')}>
            <div className={cx('title')}>
                <div className={cx('title-container')}>
                    <span className={cx('dotnew')}>
                        <span className={cx('dotnew-animation')}></span>
                    </span>
                    <div className={cx('text')}>
                        <img src={logobhx} alt="" />
                        <span>FREESHIP cho đơn hàng từ 300.000đ</span>
                    </div>
                    <span className={cx('note')}>(Đây là khuyến mãi của website cùng tập đoàn MWG)</span>
                </div>
                <span className={cx('close')}>
                    <span>
                        Xem thêm <b>10.000+</b>
                        <br></br>
                        sản phẩm khuyến mãi
                    </span>
                    <img src={iconarrow} alt="" />
                </span>
            </div>
            <div className={cx('container')}>
                <div className={cx('voucher')}>
                    <span className={cx('title-voucher')}>Tặng thêm mã giảm 10%</span>
                    <input type="email" className={cx('email-input')} placeholder="Nhập email*" />
                    <input type="phone" className={cx('phone-input')} placeholder="Nhập SĐT*" />
                    <button className={cx('button')}>NHẬN MÃ</button>
                    <p>*Áp dụng cho khách lần đầu mua hàng tại BachhoaXANH</p>
                </div>
                <motion.div className={cx('product')}>
                    <motion.div className={cx('product-container')} drag="x" dragConstraints={{ right: 0, left: 0 }}>
                        {_handleProduct()}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default ShowPromoteBHX;
