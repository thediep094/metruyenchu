import { PersonOutline } from '@material-ui/icons'
import './NominateEditor.scss'
import { nominateEditor } from '../../data/NominateEditor'
import { Readed } from '../../data/Readed'
import { Link } from 'react-router-dom'
const NominateEditor = () => {
    return (
        <div className="NominateEditor">
            <div className="NominateEditor__background">
                <img src="https://static.cdnno.com/storage/topbox/a7f407515a31e2cd505843260faa6ec3.jpg" alt="" />
            </div>
            <div className="NominatedEditor__wrapper">
                <div className="NominateEditor__left">
                    <div className="NominatedEditor__left__tag">
                        <h1>Biên tập viên đề cử</h1>
                        <Link to="/">Xem tất cả</Link>
                    </div>
                    {
                        nominateEditor.map((item, index) => {
                            return (
                                <>
                                    <div className="NominateEditor__left__item" key={index}>
                                        <div className="NominateEditor__left__item__img">
                                            <Link to="/"><img src={item.imgUrl} alt="" /></Link>
                                        </div>

                                        <div className="NominateEditor__left__item__info">
                                            <Link to="/">
                                                <h1>{item.name}</h1>
                                            </Link>
                                            <p> {item.description} </p>
                                            <div className="NominateEditor__left__item__info__actor">
                                                <PersonOutline className='NominateEditor__left__item__info__actor__icon' />
                                                <h1>{item.actor}</h1>
                                                <div className="NominateEditor__left__item__info__tag">
                                                    <Link to="/"><span>{item.tag}</span></Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="NominateEditor__right">
                    <div className="NominateEditor__right__readed">
                        <div className="NominateEditor__right__readed__header">
                            <h1>Đang đọc</h1>
                            <Link to="/" className='NominateEditor__right__readed__header__link'>Xem tất cả</Link>
                        </div>
                        <div className="NominateEditor__right__readed__container">
                            {
                                Readed.map((item, index) => {
                                    return (
                                        <div className="NominateEditor__right__readed__container__item" key={index}>
                                            <Link to="/">
                                                <img src={item.imgUrl} alt="" />
                                            </Link>
                                            <div className="NominateEditor__right__readed__container__item__info">
                                                <Link className='NominateEditor__right__readed__container__item__info__link' to="/"> {item.name} </Link>
                                                <p>Đã đọc: {item.readed}/{item.chap}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="NominateEditor__right__tutorial">
                        <div className="NominateEditor__right__tutorial__header">
                            <h1>Hướng dẫn</h1>
                            <Link to="/" className='NominateEditor__right__tutorial__header__link'>Xem tất cả</Link>

                        </div>
                        <div className="NominateEditor__right__tutorial__container">
                            <ul>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Làm sao để tặng quà? Tặng hoa? Thả cảm xúc?</Link></li>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Vì sao tôi và người khác chửi lộn mà chỉ mình tôi bị khóa?</Link></li>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Người hâm mộ là gì, sao tôi đọc truyện nhưng không được thành người hâm mộ?</Link></li>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Tôi muốn xem điểm hâm mộ của mình, vào đâu để xem?</Link></li>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Chà, nghe cũng hấp dẫn, thế Cấp có tác dụng gì?</Link></li>
                                <li><Link className='NominateEditor__right__tutorial__container__link' to="/">Tôi muốn biết đang có bao nhiêu Kẹo, hạn sử dụng, đã sử dụng như nào thì phải làm sao?</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NominateEditor