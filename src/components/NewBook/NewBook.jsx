import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { newUpdate } from '../../data/NewUpdate';
import { MoiHoanThanh } from '../../data/MoiHoanThanh';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './NewBook.scss';
import { ArrowBackIos, ArrowForwardIos, PersonOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NewBook = () => {

    return (
        <div className="NewBook">


            <div className="NewBook__left">
                <div className="NewBook__left__title">
                    <h1>Mới đăng</h1>
                    <Link to="/" className="NewBook__left__title__link">Xem tất cả</Link>
                </div>
                <div className="NewBook__left__swiper">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            newUpdate.map((item, index) => {
                                return (
                                    <SwiperSlide className='mySwiper__item' key={index}>
                                        <Link to="/" className="mySwiper__item__link"><img src={item.imgUrl} /></Link>
                                        <div className="NewBook__left__name">
                                            <h1>{item.name}</h1>
                                        </div>
                                        <div className="NewBook__left__description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="NewBook__left__actor">
                                            <div className="NewBook__left__actor__left">

                                                <PersonOutline className='NewBook__left__actor__icon' />
                                                <p>{item.actor}</p>
                                            </div>
                                            <div className="NewBook__left__tag">
                                                <span>{item.tag}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    {/* <ArrowForwardIos className='NewBook__left__swiper__icon left' />
                    <ArrowForwardIos className='NewBook__left__swiper__icon right' /> */}
                </div>
                <div className="NewBook__left__btn">
                    <Link to="/" className='NewBook__left__btn__link'>Đọc ngay</Link>
                </div>
            </div>

            <div className="NewBook__right">
                <div className="NewBook__right__title">
                    <h1>Mới hoàn thành</h1>
                    <Link to="/" className="NewBook__right__title__link">Xem tất cả</Link>
                </div>
                <div className="NewBook__right__container">
                    {
                        MoiHoanThanh.map((item, index) => {
                            return (
                                <div className="NewBook__right__container__item" key={index}>
                                    <Link to="/" className="NewBook__right__container__item__link">
                                        <img src={item.imgUrl} alt="" />
                                    </Link>
                                    <div className="NewBook__right__container__item__info">
                                        <Link to="/" className="NewBook__right__container__item__info__title">
                                            <h1>{item.name}</h1>
                                        </Link>
                                        <div className="NewBook__right__container__item__info__description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="NewBook__right__container__item__info__actor">
                                            <div className="NewBook__right__container__item__info__actor__left">

                                                <PersonOutline className='NewBook__right__container__item__info__actor__icon' />
                                                <p>{item.actor}</p>
                                            </div>
                                            <div className="NewBook__right__container__item__info__tag">
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
        </div>
    )
}

export default NewBook