import styles from './HomeFix.module.scss';
import classNames from 'classnames/bind';
import { ImageOptionPormo } from '~/Images/OptionPromo';
import { Images } from '~/Images';
import Slick from '~/components/Slick';
import { ImagesSlick } from '~/Images/Slick';
import { useEffect, useState } from 'react';
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

function HomeFix() {
    const [showimage, setShowImage] = useState('');
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
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 599) {
                setShowImage('show-image-sale');
            } else {
                setShowImage('');
            }
        });
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img width="1920" height="920" src={Images.ImageHome} alt="Banner Big Campaign" />
            </div>
            <div className={cx('main-container')}>
                <div className={cx('image-sale-container', showimage)}>
                    <div className={cx('image-container')}>
                        <img src={Images.HeSale} alt="" />
                        <img src={Images.HeSale} alt="" />
                    </div>
                </div>
                <div className={cx('slick-container')}>
                    <Slick images={ImagesSlick} />
                </div>
                <ul className={cx('option-promo')}>{_handleOptionPromo()}</ul>
                <div className={cx('topzane-container')}>
                    <img src={Images.TopZone} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeFix;
