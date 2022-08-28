import styles from './ProductFlashSale.module.scss';
import classNames from 'classnames/bind';
import fsicon from './fs-iconfire.png';
const cx = classNames.bind(styles);

const ProductFlashSale = (images) => {
    return images.map((item, index) => (
        <div key={index}>
            <div className={cx('product-container')}>
                <div className={cx('product')}>
                    <div className={cx('product-image')}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <div>
                        <strong className={cx('price')}>
                            {item.price}₫{item.discount && <small>{item.discount}%</small>}
                        </strong>
                        <div className={cx('fs-container')}>
                            <img src={fsicon} alt="" />
                            <span></span>
                            <i className={cx('fs-iconfire')} style={{ width: item.count + '0%' }}></i>
                            <b>Còn {item.count}/10 suất</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
};

export default ProductFlashSale;
