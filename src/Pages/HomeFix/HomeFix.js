import styles from './HomeFix.module.scss';
import classNames from 'classnames/bind';
import { ImageOptionPormo } from '~/Images/OptionPromo';
import { Images } from '~/Images';
import Slick from '~/components/Slick';
import { ImagesSlick } from '~/Images/Slick';
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
        title: 'Sale hè' + <br></br> + 'Giảm đến 50%',
    },
    {
        image: ImageOptionPormo.DongHo,
        title: 'Bão sale' + <br></br> + 'đồng hồ',
    },
];

function HomeFix() {
    const _handleOptionPromo = () => {
        return OPTION_PROMO.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt="" />
            </li>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img width="1920" height="920" src={Images.ImageHome} alt="Banner Big Campaign" />
            </div>
            <div className={cx('main-container')}>
                <div className={cx('slick-container')}>
                    <Slick images={ImagesSlick} />
                </div>
                <ul className={cx('option-promo')}>{_handleOptionPromo()}</ul>
            </div>
        </div>
    );
}

export default HomeFix;
