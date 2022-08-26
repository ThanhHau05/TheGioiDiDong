import styles from './HomeFix.module.scss';
import classNames from 'classnames/bind';
import { ImageOptionPormo } from '~/Images/OptionPromo';
import { Images } from '~/Images';
import Slick from '~/components/Slick';
import { ImagesSlick } from '~/Images/Slick';
import { useEffect, useState } from 'react';
import DealNgonMoiNgay from '~/components/DealNgonMoiNgay';
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
                <DealNgonMoiNgay />
            </div>
        </div>
    );
}

export default HomeFix;
