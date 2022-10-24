import styles from './HomeFix.module.scss';
import classNames from 'classnames/bind';
import { ImageOptionPormo } from '~/Images/OptionPromo';
import { Images } from '~/Images';
import Slick from '~/components/Slick';
import { ImagesSlick } from '~/Images/Slick';
import { useEffect, useState } from 'react';
import DealNgonMoiNgay from '~/components/DealNgonMoiNgay';
import TuanLeVangVivo from '~/components/TuanLeVangVivo';
import { XU_HUONG_MUA_SAM } from '~/Images/XuHuongMuaSam';
import { DANH_MUC_NOI_BAT } from '~/Images/DanhMucNoiBat';
import Slider from 'react-slick';
import { ImagesSliderPayOnline } from '~/Images/PayOnline';
import ButtonCircleNextArrow from '~/components/ButtonCircleNextArrow';
import ButtonCirclePrevArrow from '~/components/ButtonCirclePrevArrow';
import GoiYHomNay from '~/components/GoiYHomNay';
import ProductFlashSale from '~/components/ProductFlashSale';
import { ImagesProductFlashSale } from '~/Images/ProductFlashSale';
import post4, { Post24hCongNghe } from '~/Images/24hCongNghe';
import { ImagesTradeMark } from '~/Images/TradeMark';
import { motion } from 'framer-motion';
import { ImagesSliderDealKhung } from '~/Images/DealKhung';
import ShowPromoteBHX from '~/components/ShowPromoteBHX';
import ButtonPrevArrow from '~/components/ButtonPrevArrow';
import ButtonNextArrow from '~/components/ButtonNextArrow';
const cx = classNames.bind(styles);
const OPTION_PROMO = [
    {
        image: ImageOptionPormo.GiamOnline,
        title: 'Chỉ giảm Online',
    },
    {
        image: ImageOptionPormo.XaHang,
        title: 'Xả hàng giảm sốc',
    },
    {
        image: ImageOptionPormo.SaleHe,
        title1: 'Sale hè',
        title2: 'Giảm đến 50%',
    },
    {
        image: ImageOptionPormo.DongHo,
        title1: 'Bão sale',
        title2: 'đồng hồ',
    },
];
const BUTTON_TIMELINE = [
    {
        title: 'Đang diễn ra',
        time: '19:00 - 21:00',
    },
    {
        title: 'Ngày mai',
        time: '09:00 - 11:00',
    },
    {
        title: 'Đang diễn ra',
        time: '14:00 - 16:00',
    },
];

const DICH_VU_TIEN_ICH = [
    {
        class: 'service-card',
        title: 'Mua Mã thẻ cào',
        text_strong: 'Giảm 3%',
        text: ' cho mệnh giá từ 100.000 trở lên',
    },
    {
        class: 'service-money',
        title: 'Dịch Vụ Đóng Tiền',
        text: 'Điện, Nước, Internet, Cước điện thoại trả sau',
    },
    {
        class: 'service-game',
        title: 'Mua thẻ game',
        text_strong: 'Giảm 2%',
        text: ' cho tất cả nhà mạng, áp dụng cho mệnh giá từ 300.000 trở lên',
    },
    {
        class: 'service-ticket',
        title: 'Vé máy bay, tàu',
        text: 'Thu hộ tiền vé xe, vé tàu, vé máy bay',
    },
];

function HomeFix() {
    const [showimage, setShowImage] = useState('');
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [timeline, setTimeLine] = useState(0);
    let hourvalue = 1;
    let minutevalue = 26;
    let secondvalue = 43;
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 599) {
                setShowImage('show-image-sale');
            } else {
                setShowImage('');
            }
        });
    });
    useEffect(() => {
        setSecond(secondvalue);
        setMinute(minutevalue);
        setHour(hourvalue);
        const timer = setInterval(() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            secondvalue = secondvalue - 1;
            secondvalue = `0${secondvalue}`.slice(-2);
            setSecond(secondvalue);
            if (secondvalue === '-1') {
                secondvalue = 59;
                setSecond(secondvalue);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                minutevalue = minutevalue - 1;
                minutevalue = `0${minutevalue}`.slice(-2);
                setMinute(minutevalue);
            }
            if (minutevalue === '-1') {
                minutevalue = 59;
                setMinute(minutevalue);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                hourvalue = hourvalue - 1;
                setHour(hourvalue);
            }
            if (hourvalue === '-1') {
                hourvalue = 1;
                setHour(hourvalue);
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const _handleOptionPromo = () => {
        return OPTION_PROMO.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt="" />
                {item.title ? (
                    <span>{item.title}</span>
                ) : (
                    <span>
                        {item.title1}
                        <br></br>
                        {item.title2}
                    </span>
                )}
            </li>
        ));
    };
    const _handleButtonTimeLine = () => {
        return BUTTON_TIMELINE.map((item, index) => (
            <div
                key={index}
                className={cx(timeline === index && 'active-container')}
                onClick={() => setTimeLine(index)}
            >
                <span className={cx('title-timeline', timeline === index && 'active')}>{item.title}</span>
                <span className={cx('timeline', timeline === index && 'active')}>{item.time}</span>
            </div>
        ));
    };
    const _handleItemXuHuongMuaSam = () => {
        return XU_HUONG_MUA_SAM.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt={item.title} />
                <p>
                    <span>{item.title}</span>
                    <strong>{item.text}</strong>
                </p>
            </li>
        ));
    };
    const _handleItemDanhMucNoiBat = () => {
        return DANH_MUC_NOI_BAT.map((item, index) => (
            <h3 key={index}>
                <img src={item.image} alt="" />
                <span>{item.title}</span>
            </h3>
        ));
    };
    const _handleImagesPayOnline = (value) => {
        return value.map((item, index) => (
            <div key={index} className={cx('discount-payonl-image')}>
                <img src={item} alt="" />
            </div>
        ));
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: <ButtonCircleNextArrow />,
        prevArrow: <ButtonCirclePrevArrow />,
    };
    const _handleItemDichVuTienIch = () => {
        return DICH_VU_TIEN_ICH.map((item, index) => (
            <li key={index} className={cx('item-' + item.class)}>
                <div className={cx('service-container')}>
                    <i className={cx(item.class)}></i>
                </div>
                <div className={cx('text-service-container')}>
                    <h3>{item.title}</h3>
                    <p>
                        <strong>{item.text_strong}</strong>
                        {item.text}
                    </p>
                </div>
            </li>
        ));
    };
    const settingsdeal = {
        dots: false,
        rows: 2,
        slidesPerRow: 6,
        infinite: false,
        nextArrow: <ButtonNextArrow classdeal />,
        prevArrow: <ButtonPrevArrow classdeal />,
    };
    const _handleItemPost24HcongNghe = () => {
        return Post24hCongNghe.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt={item.title} />
                <span> {item.title}</span>
            </li>
        ));
    };
    const _handleImagesTradeMark = () => {
        return ImagesTradeMark.map((item, index) => (
            <motion.div key={index} className={cx('trademark-image')}>
                <img src={item} alt="" />
            </motion.div>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img width="1920" height="920" src={Images.ImageHome} alt="Banner Big Campaign" />
            </div>
            <div className={cx('main-container')}>
                <div className={cx('image-sale-container', showimage)}>
                    <div className={cx('image-container')}>
                        <img src={Images.TraiHeSale} alt="" />
                        <img src={Images.PhaiHeSale} alt="" />
                    </div>
                </div>
                <div className={cx('slick-container')}>
                    <Slick images={ImagesSlick} />
                </div>
                <ul className={cx('option-promo')}>{_handleOptionPromo()}</ul>
                <div className={cx('topzane-container')}>
                    <img src={Images.TopZone} alt="" />
                </div>
                <div className={cx('flashsale-container')}>
                    <div>
                        <div className={cx('gvdshock-container')}>
                            <div className={cx('lightning-image')}>
                                <img width="32" height="70" src={Images.Lightning} alt="lightning" />
                            </div>
                            <h3>GIỜ VÀNG DEAL SỐC</h3>
                            <div className={cx('endtime-container')}>
                                <span className={cx('label-endtime')}>Kết thúc trong</span>
                                <span className={cx('coutdown-time')}>
                                    <label>0{hour}</label>
                                    <label>{minute}</label>
                                    <label>{second}</label>
                                </span>
                            </div>
                        </div>
                        <div className={cx('timeline-container')}>{_handleButtonTimeLine()}</div>
                    </div>
                    <div className={cx('timeline-product-container')}>
                        <Slider {...settingsdeal}>{ProductFlashSale(ImagesProductFlashSale)}</Slider>
                    </div>
                </div>
                <DealNgonMoiNgay />
                <TuanLeVangVivo />
                <div className={cx('shopping-trends')}>
                    <strong className={cx('ingredient-title')}>XU HƯỚNG MUA SẮM</strong>
                    <ul>{_handleItemXuHuongMuaSam()}</ul>
                </div>
                <div className={cx('cate-feature')}>
                    <strong className={cx('ingredient-title')}>DANH MỤC NỔI BẬT</strong>
                    <div className={cx('cate-feature-container')}>{_handleItemDanhMucNoiBat()}</div>
                </div>
                <div className={cx('discount-payonl')}>
                    <strong className={cx('ingredient-title')}>GIẢM THÊM KHI THANH TOÁN ONLINE</strong>
                    <div className={cx('discount-payonl-container')}>
                        <Slider {...settings}>{_handleImagesPayOnline(ImagesSliderPayOnline)}</Slider>
                    </div>
                </div>
                <div className={cx('convenient-service')}>
                    <strong className={cx('ingredient-title')}>
                        DỊCH VỤ TIỆN ÍCH<p>XEM THEM DỊCH VỤ</p>
                    </strong>
                    <ul>{_handleItemDichVuTienIch()}</ul>
                </div>
                <div className={cx('suggestions')}>
                    <strong className={cx('ingredient-title')}>GỢI Ý HÔM NAY</strong>
                    <GoiYHomNay />
                    <div className={cx('more-suggestions')}>
                        <span>Xem tất cả</span>
                    </div>
                </div>
                <div className={cx('h24-technology')}>
                    <div className={cx('h24-technology-container')}>
                        <strong className={cx('ingredient-title')}>
                            24H CÔNG NGHỆ<p>XEM TẤT CẢ</p>
                        </strong>
                        <ul>{_handleItemPost24HcongNghe()}</ul>
                    </div>
                    <img src={post4} alt="" />
                </div>
                <div className={cx('trademark')}>
                    <strong className={cx('ingredient-title')}>CHUYÊN TRANG THƯƠNG HIỆUưh</strong>
                    <motion.div className={cx('trademark-wrap')}>
                        <motion.div
                            className={cx('trademark-container')}
                            drag="x"
                            dragConstraints={{ right: 0, left: 0 }}
                        >
                            {_handleImagesTradeMark()}
                        </motion.div>
                    </motion.div>
                </div>
                <div className={cx('discount-payonl', 'newchain')}>
                    <strong className={cx('ingredient-title')}>CHUỖI MỚI DEAL KHỦNG</strong>
                    <div className={cx('discount-payonl-container')}>
                        <Slider {...settings}>{_handleImagesPayOnline(ImagesSliderDealKhung)}</Slider>
                    </div>
                </div>
                <ShowPromoteBHX />
            </div>
        </div>
    );
}

export default HomeFix;
