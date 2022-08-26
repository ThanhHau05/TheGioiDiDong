import styles from './DealNgonMoiNgay.module.scss';
import classNames from 'classnames/bind';
import { Images } from '~/Images';
import Product from '../Product';
import { ImagesDealNgonMoiNgay } from '~/Images/DealNgonMoiNgay';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonNextArrow from '../ButtonNextArrow';
import ButtonPrevArrow from '../ButtonPrevArrow';
const cx = classNames.bind(styles);

function DealNgonMoiNgay() {
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
            <img src={Images.DealNMN} alt="" />
            <div className={cx('product-container')}>
                <Slider {...settings}>{Product(ImagesDealNgonMoiNgay, '236px', '468px')}</Slider>
            </div>
            <div className={cx('button-more')}>
                <span>Xem tất cả</span>
            </div>
        </div>
    );
}

export default DealNgonMoiNgay;
