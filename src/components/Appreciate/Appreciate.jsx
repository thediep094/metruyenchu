import './Appreciate.scss';
import { DanhGiaCao } from '../../data/DanhGiaCao';
import { Link } from 'react-router-dom';
import { PersonOutline } from '@material-ui/icons';
import { MoiDanhGia } from '../../data/MoiDanhGia';
const Appreciate = () => {
    return (
        <div className="Appreciate">
            <div className="Appreciate__left">
                <div className="Appreciate__left__title">
                    <h1>Đánh giá cao</h1>
                    <Link to="/" className="Appreciate__left__title__link">Xem tất cả</Link>
                </div>
                <div className="Appreciate__left__container">
                    {
                        DanhGiaCao.map((item, index) => {
                            return (
                                <div className="Appreciate__left__container__item" key={index}>
                                    <Link to="/" className="Appreciate__left__container__item__link">
                                        <img src={item.imgUrl} alt="" />
                                    </Link>
                                    <div className="Appreciate__left__container__item__info">
                                        <Link to="/" className="Appreciate__left__container__item__info__title">
                                            <h1>{item.name}</h1>
                                        </Link>
                                        <div className="Appreciate__left__container__item__info__appreciate">
                                            <span>{item.appreciate}</span>
                                            <p>{item.countAppreciate} đánh giá</p>
                                        </div>
                                        <div className="Appreciate__left__container__item__info__description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="Appreciate__left__container__item__info__actor">
                                            <div className="Appreciate__left__container__item__info__actor__left">

                                                <PersonOutline className='Appreciate__left__container__item__info__actor__icon' />
                                                <p>{item.actor}</p>
                                            </div>
                                            <div className="Appreciate__left__container__item__info__tag">
                                                <span>{item.tag}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="Appreciate__right">
                <div className="Appreciate__right__title">
                    <h1>Mới đánh giá</h1>
                    <Link to="/" className="Appreciate__right__title__link">Xem tất cả</Link>
                </div>
                <div className="Appreciate__right__container">
                    {
                        MoiDanhGia.map((item, index) => {
                            return (
                                <div className="Appreciate__right__container__item" key={index}>
                                    <div className="Appreciate__right__container__item__top">
                                        <div className="Appreciate__right__container__item__top__left">
                                            <Link to="/"><img src={item.imgUrl} alt="" /></Link>
                                        </div>
                                        <div className="Appreciate__right__container__item__top__right">
                                            <div className="Appreciate__right__container__item__top__right__title">
                                                <h1>{item.user}</h1>
                                                <p>đánh giá</p>
                                            </div>
                                            <div className="Appreciate__right__container__item__top__right__book">
                                                <h1>{item.book}</h1>
                                                <span>{item.star}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Appreciate__right__container__item__bottom">
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Appreciate