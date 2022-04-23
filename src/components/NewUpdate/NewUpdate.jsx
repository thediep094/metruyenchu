import './NewUpdate.scss'
import { newUpdate } from '../../data/NewUpdate'
import { Link } from 'react-router-dom'
function NewUpdate() {
    return (
        <div className="NewUpdate">
            <div className="NewUpdate__header">
                <h1>Mới cập nhật</h1>
                <Link to="/" className='NewUpdate__header__link'>Xem tất cả</Link>
            </div>
            <div className="NewUpdated__container">
                {
                    newUpdate.map((item, index) => {
                        return (
                            <div className={index % 2 === 1 ? "NewUpdated__container__item even" : "NewUpdated__container__item"}>
                                <span>{item.tag}</span>
                                <Link to="/" className='NewUpdated__container__item__name'>
                                    <h1>{item.name}</h1>
                                </Link>
                                <Link to="/" className='NewUpdated__container__item__update'>
                                    <p>{item.update}</p>
                                </Link>
                                <h2>{item.actor}</h2>
                                <h3>{item.user}</h3>
                                <h4>{item.time}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewUpdate