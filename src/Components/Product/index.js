import styles from './Product.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Product = (images, width_product, height_product) => {
    return images.map((item, index) => (
        <div key={index}>
            <div
                className={cx('product-container')}
                style={{ width: width_product, height: height_product, display: 'flex' }}
            >
                <div className={cx('product')}>
                    {item.tragop && (
                        <div className={cx('item-installment')}>
                            {item.tragop !== ' ' && <span>{item.tragop}</span>}
                        </div>
                    )}
                    <div className={cx('item-img')}>
                        {item.new && <img className={cx('new-released')} src={item.new} alt="" />}
                        {item.baohanh && <img className={cx('insurance')} src={item.baohanh} alt="" />}
                        <img className={cx('image-product')} src={item.image} alt={item.title} />
                    </div>
                    {item.preorder && <p className={cx('item-preorder')}>{item.preorder}</p>}
                    {item.result && (
                        <p className={cx('item-result', item.result.class)}>
                            <img src={item.result.image} alt={item.result.title} />
                            <span>{item.result.title}</span>
                        </p>
                    )}
                    <h3>{item.title}</h3>
                    {item.text_online && <p className={cx('item-text-online')}>{item.text_online}</p>}
                    <strong className={cx('price')}>
                        {item.price}₫{item.discount && <small>{item.discount}</small>}
                    </strong>
                    {item.gift && <p className={cx('gift')}>{item.gift}</p>}
                    {item.twoprice && <p className={cx('twoprice')}>{item.twoprice}</p>}
                    {item.vote && (
                        <p className={cx('item-vote')}>
                            <b>{item.vote.vote}</b>
                            <i className={cx('icon-vote')}></i>
                            <span>{item.vote.numbervote}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    ));
};

export default Product;
