import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { ImageHeaderTop } from './ImagesHeader/ImageTop';
import { ImagesBottom } from './ImagesHeader/ImageBottom';
import { NAV_LIST } from './NavItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

const ITEM_LIST = [
    {
        icon: ImagesBottom.IconPhone,
        title: 'Điện thoại',
    },
    {
        icon: ImagesBottom.IconLaptop,
        title: 'Laptop',
    },
    {
        icon: ImagesBottom.IconTablet,
        title: 'Tablet',
    },
    {
        icon: ImagesBottom.IconPhuKien,
        title: 'Phụ kiện',
        class: 'item-list',
        navitem: 'list',
        item1: NAV_LIST.phukien.phukiendidong,
        item2: NAV_LIST.phukien.phukienlaptop,
        item3: NAV_LIST.phukien.thietbinhathongminh,
        item4: NAV_LIST.phukien.thuonghieuhangdau,
        item5: NAV_LIST.phukien.thietbiamthanh,
        item6: NAV_LIST.phukien.thietbiluutru,
        item7: NAV_LIST.phukien.phukienkhac,
    },
    {
        icon: ImagesBottom.IconSmartwatch,
        title: 'Smartwatch',
    },
    {
        icon: ImagesBottom.IconWatch,
        title: 'Đồng hồ',
    },
    {
        icon: ImagesBottom.IconPC,
        title: 'PC, Máy in',
        class: 'item-list',
        navitem: 'column',
        item1: NAV_LIST.PC_MayIn,
    },
    {
        title: 'Máy cũ giá rẻ',
    },
    {
        title: 'Sim, Thẻ cào',
    },
    {
        title: 'Dịch vụ tiện ích',
        class: 'item-list',
        navitem: 'column',
        item1: NAV_LIST.dichvutienich,
    },
];

function Header() {
    const [count, setCount] = useState(0);
    const _handleRenderImage = () => {
        return ImageHeaderTop.map((item, index) => {
            return index === count ? <img key={index} src={item} alt="" /> : null;
        });
    };
    const _handleRenderItems = () => {
        return ITEM_LIST.map((item, index) => {
            return item.icon ? (
                <li key={index} className={cx(item.class)}>
                    <a href="/">
                        <img src={item.icon} alt="icon" />
                        <span>{item.title}</span>
                    </a>
                    {item.class && (
                        <div className={cx('nav-list', item.navitem === 'column' && 'nav-column')}>
                            {item.navitem === 'list' && (
                                <>
                                    <div className={cx('item-children')}>
                                        {item.item1.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item2.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item3.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item4.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item5.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item6.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('item-children')}>
                                        {item.item7.map((item, index) => (
                                            <div key={index}>
                                                {item.title && <strong>{item.title}</strong>}
                                                {item.content && <h3>{item.content}</h3>}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                            {item.navitem === 'column' && (
                                <div className={cx('item-children')}>
                                    {item.item1.map((item, index) => (
                                        <div key={index}>
                                            <h3>{item.content}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </li>
            ) : (
                <li key={index} className={cx(item.class)}>
                    <a href="/">
                        <span>{item.title}</span>
                    </a>
                    {item.class && (
                        <div className={cx('nav-list', item.navitem === 'column' && 'nav-column')}>
                            {item.navitem === 'column' && (
                                <div className={cx('item-children')}>
                                    {item.item1.map((item, index) => (
                                        <div key={index}>
                                            <h3>{item.content}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </li>
            );
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-top')}>
                <div className={cx('image-container')}>
                    <div className={cx('button-container')}>
                        <div className={cx('icon-container')} onClick={() => setCount(count === 0 ? 1 : 0)}>
                            <div className={cx('icon-prev')}></div>
                        </div>
                        <div className={cx('icon-container')} onClick={() => setCount(count === 0 ? 1 : 0)}>
                            <div className={cx('icon-next')}></div>
                        </div>
                    </div>
                    {_handleRenderImage()}
                </div>
            </div>
            <div className={cx('container-center')}>
                <div className={cx('logo-container')}>
                    <i className={cx('logo')}></i>
                </div>
                <div className={cx('center-wrap')}>
                    <div className={cx('address-container')}>
                        <button>
                            Xem giá, tồn kho tại:
                            <strong>
                                <span>Hồ Chí Minh</span>
                            </strong>
                        </button>
                    </div>
                    <div className={cx('search-container')}>
                        <input type="text" placeholder="Bạn tìm gì..." maxLength="100"></input>
                        <div className={cx('icon-search-container')}>
                            <i className={cx('icon-search')}></i>
                        </div>
                    </div>
                    <button className={cx('order-history')}>Lịch sử đơn hàng</button>
                    <div className={cx('cart')}>
                        <i className={cx('cart-icon')}></i>
                        <span>Giỏ hàng</span>
                    </div>
                    <div className={cx('divitem-container')}>
                        <div className={cx('divitem')}>
                            <a href="/">
                                24h<br></br>Công nghệ
                            </a>
                        </div>
                        <div className={cx('bordercol')}></div>
                        <div className={cx('divitem')}>
                            <a href="/">Hỏi Đáp</a>
                        </div>
                        <div className={cx('bordercol')}></div>
                        <div className={cx('divitem')}>
                            <a href="/">Game App</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrap-bottom')}>
                <div className={cx('container-bottom')}>
                    <ul>{_handleRenderItems()}</ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
