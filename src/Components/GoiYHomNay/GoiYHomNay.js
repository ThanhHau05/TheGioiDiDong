import styles from './GoiYHomNay.module.scss';
import classNames from 'classnames/bind';
import { ImagesButton } from '~/Images/GoiYHomNay/Button';
import { useState } from 'react';
import { ProductGoiYHomNay } from '~/Images/GoiYHomNay/Product';
import ListProduct from '../Product/ListProduct';
const cx = classNames.bind(styles);
const BUTTON_GOI_Y = [
    {
        image: ImagesButton.ChoBan,
        title: 'Cho bạn',
    },
    {
        image: ImagesButton.XaHang,
        title: 'Xả hàng giảm sốc',
    },
    {
        image: ImagesButton.GiamOnline,
        title: 'Chỉ giảm Online',
    },
    {
        image: ImagesButton.SaleHe,
        title: 'Sale hè - Giảm đến 50%',
    },
];

function GoiYHomNay() {
    const [buttongoiy, setButtonGoiY] = useState(0);
    const _handleButtonGoiY = () => {
        return BUTTON_GOI_Y.map((item, index) => (
            <div
                key={index}
                className={cx('button-suggestions', buttongoiy === index && 'active')}
                onClick={() => setButtonGoiY(index)}
            >
                <img src={item.image} alt={item.title} />
                <span style={{ color: buttongoiy === index && '#222' }}>{item.title}</span>
            </div>
        ));
    };
    return (
        <div className={cx('container')}>
            <div className={cx('button-suggestions-container')}>{_handleButtonGoiY()}</div>
            <div className={cx('product-container')}>
                <ListProduct
                    images={ProductGoiYHomNay}
                    width_product="227px"
                    height_product="458px"
                    classproduct
                    isHighLight={buttongoiy}
                />
            </div>
        </div>
    );
}

export default GoiYHomNay;
