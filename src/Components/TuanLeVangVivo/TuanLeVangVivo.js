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
const cx = classNames.bind(styles);

function TuanLeVangVivo() {
    const _handleSlider = () => {
        return ImagesSliderTuanLeVangVivo.map((item, index) => (
            <div key={index} className={cx('image-slider')}>
                <img src={item} alt="" />
            </div>
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
                <div className={cx('image-slider-container')}>{_handleSlider()}</div>
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
