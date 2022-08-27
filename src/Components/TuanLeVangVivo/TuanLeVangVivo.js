import styles from './TuanLeVangVivo.module.scss';
import classNames from 'classnames/bind';
import { ImagesSliderTuanLeVangVivo } from '~/Images/TuanLeVangVivo/Slider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImagesTuanLeVangVivo } from '~/Images/TuanLeVangVivo';
import Product from '../Product';
import ButtonPrevArrow from '../ButtonPrevArrow';
import ButtonNextArrow from '../ButtonNextArrow';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function TuanLeVangVivo() {
    const _handleSlider = () => {
        return ImagesSliderTuanLeVangVivo.map((item, index) => (
            <motion.div key={index} className={cx('image-slider')}>
                <img src={item} alt="" />
            </motion.div>
        ));
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <ButtonNextArrow />,
        prevArrow: <ButtonPrevArrow />,
    };
    return (
        <div className={cx('container')}>
            <p>TUẦN LỄ VÀNG VIVO</p>
            <div className={cx('main-container')}>
                <motion.div className={cx('product-wrap')}>
                    <motion.div
                        className={cx('image-slider-container')}
                        drag="x"
                        dragConstraints={{ right: 0, left: 0 }}
                    >
                        {_handleSlider()}
                    </motion.div>
                </motion.div>
                <div className={cx('product-container')}>
                    <Slider {...settings}>{Product(ImagesTuanLeVangVivo, '236px', '412px')}</Slider>
                </div>
                <p className={cx('more-container')}>
                    <span>Xem tất cả sản phẩm</span>
                </p>
            </div>
        </div>
    );
}

export default TuanLeVangVivo;
