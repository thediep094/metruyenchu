import './TopBook.scss'
import { Link } from 'react-router-dom'
import { DocNhieu } from '../../data/DocNhieu'
import { ThinhHanh } from '../../data/ThinhHanh'
import { DeCu } from '../../data/DeCu'
import { BookOutlined, PersonOutline } from '@material-ui/icons'
const TopBook = () => {
    return (
        <div className="TopBook">
            <div className="TopBook__item">
                <div className="TopBook__header">
                    <h2 className="TopBook__title">Đọc nhiều tuần</h2>
                    <Link to="/" className='TopBook__header__link'>Xem tất cả</Link>
                </div>
                <div className="TopBook__content">
                    {DocNhieu.map((item, index) => {
                        return (
                            <div className="TopBook__content__item" key={index}>
                                {index === 0 ? <img src='https://metruyenchu.com/assets/images/icons/medal-1.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 1 ? <img src='https://metruyenchu.com/assets/images/icons/medal-2.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 2 ? <img src='https://metruyenchu.com/assets/images/icons/medal-3.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index !== 0 && index !== 1 && index !== 2 ? <div className="TopBook__content__item__rank">{index + 1}</div> : null}
                                <div className="TopBook__item__content">
                                    <div className="TopBook__item__left">
                                        <h1>{item.name}</h1>
                                        {index === 0 ? (
                                            <>
                                                <p>{item.views} lượt đọc</p>
                                                <div className="TopBook__item__left__actor">
                                                    <PersonOutline className='TopBook__item__left__actor__icon' />
                                                    <p>{item.actor}</p>
                                                </div>
                                                <div className="TopBook__item__left__tag">
                                                    <BookOutlined className='TopBook__item__left__tag__icon' />
                                                    <p>{item.tag}</p>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                    <div className="TopBook__item__right">
                                        {index !== 0 ? (<p>{item.views}</p>) : (
                                            <Link to="/"><img src={item.imgUrl} alt="" /></Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="TopBook__item">
                <div className="TopBook__header">
                    <h2 className="TopBook__title">Thịnh hành tuần</h2>
                    <Link to="/" className='TopBook__header__link'>Xem tất cả</Link>
                </div>
                <div className="TopBook__content">
                    {ThinhHanh.map((item, index) => {
                        return (
                            <div className="TopBook__content__item" key={index}>
                                {index === 0 ? <img src='https://metruyenchu.com/assets/images/icons/medal-1.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 1 ? <img src='https://metruyenchu.com/assets/images/icons/medal-2.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 2 ? <img src='https://metruyenchu.com/assets/images/icons/medal-3.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index !== 0 && index !== 1 && index !== 2 ? <div className="TopBook__content__item__rank">{index + 1}</div> : null}
                                <div className="TopBook__item__content">
                                    <div className="TopBook__item__left">
                                        <h1>{item.name}</h1>
                                        {index === 0 ? (
                                            <>
                                                <p>{item.views} lượt đọc</p>
                                                <div className="TopBook__item__left__actor">
                                                    <PersonOutline className='TopBook__item__left__actor__icon' />
                                                    <p>{item.actor}</p>
                                                </div>
                                                <div className="TopBook__item__left__tag">
                                                    <BookOutlined className='TopBook__item__left__tag__icon' />
                                                    <p>{item.tag}</p>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                    <div className="TopBook__item__right">
                                        {index !== 0 ? (<p>{item.views}</p>) : (
                                            <Link to="/"><img src={item.imgUrl} alt="" /></Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="TopBook__item">
                <div className="TopBook__header">
                    <h2 className="TopBook__title">Đề cử tuần</h2>
                    <Link to="/" className='TopBook__header__link'>Xem tất cả</Link>
                </div>
                <div className="TopBook__content">
                    {DeCu.map((item, index) => {
                        return (
                            <div className="TopBook__content__item" key={index}>
                                {index === 0 ? <img src='https://metruyenchu.com/assets/images/icons/medal-1.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 1 ? <img src='https://metruyenchu.com/assets/images/icons/medal-2.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index === 2 ? <img src='https://metruyenchu.com/assets/images/icons/medal-3.svg' className="TopBook__content__item__rank__img"></img> : null}
                                {index !== 0 && index !== 1 && index !== 2 ? <div className="TopBook__content__item__rank">{index + 1}</div> : null}
                                <div className="TopBook__item__content">
                                    <div className="TopBook__item__left">
                                        <h1>{item.name}</h1>
                                        {index === 0 ? (
                                            <>
                                                <p>{item.views} lượt đọc</p>
                                                <div className="TopBook__item__left__actor">
                                                    <PersonOutline className='TopBook__item__left__actor__icon' />
                                                    <p>{item.actor}</p>
                                                </div>
                                                <div className="TopBook__item__left__tag">
                                                    <BookOutlined className='TopBook__item__left__tag__icon' />
                                                    <p>{item.tag}</p>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                    <div className="TopBook__item__right">
                                        {index !== 0 ? (<p>{item.views}</p>) : (
                                            <Link to="/">
                                                <img src={item.imgUrl} alt=""></img>
                                            </Link>

                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopBook