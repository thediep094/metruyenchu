import './Navbar.scss'
import { Search, Storage, ArrowDropDownCircleOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__wrapper">
                <div className="Navbar__left">
                    <div className="Navbar__left__logo">
                        <img src="https://metruyenchu.com/assets/images/logo.png?130223" alt="" />
                    </div>
                    <div className="Navbar__left__category">
                        <Storage className='Navbar__left__category__icon' />
                        <a href="#">Thể Loại</a>
                        <div className="Navbar__left__category__items">
                            <a href="#" className='Navbar__left__category__item'>Tất cả</a>
                            <a href="#" className='Navbar__left__category__item'>Huyền Huyễn</a>
                            <a href="#" className='Navbar__left__category__item'>Võng Du</a>
                            <a href="#" className='Navbar__left__category__item'>Đồng Nhân</a>
                            <a href="#" className='Navbar__left__category__item'>Cạnh Kỹ</a>
                            <a href="#" className='Navbar__left__category__item'>Kiếm Hiệp</a>
                            <a href="#" className='Navbar__left__category__item'>Tiên Hiệp</a>
                            <a href="#" className='Navbar__left__category__item'>Khoa Huyễn</a>
                            <a href="#" className='Navbar__left__category__item'>Đô Thị</a>
                            <a href="#" className='Navbar__left__category__item'>Dã Sử</a>
                            <a href="#" className='Navbar__left__category__item'>Huyền Nghi</a>
                            <a href="#" className='Navbar__left__category__item'>Kỳ Ảo</a>
                        </div>
                    </div>
                    <div className="Navbar__left__charts">
                        <a href="#">Bảng xếp hạng</a>
                        <div className="Navbar__left__charts__items">
                            <a href="#" className='Navbar__left__charts__item'>Thịnh hành</a>
                            <a href="#" className='Navbar__left__charts__item'>Đọc nhiều</a>
                            <a href="#" className='Navbar__left__charts__item'>Đề cử</a>
                            <a href="#" className='Navbar__left__charts__item'>Tặng thưởng</a>
                            <a href="#" className='Navbar__left__charts__item'>Yêu thích</a>
                            <a href="#" className='Navbar__left__charts__item'>Thảo luận</a>
                        </div>
                    </div>
                </div>

                <div className="Navbar__middle">
                    <input type="text" placeholder='Tìm kiếm' />
                    <Search className='Navbar__middle__icon' />
                </div>

                <div className="Navbar__right">
                    <div className="Navbar__right__upload">
                        <ArrowDropDownCircleOutlined className='Navbar__right__upload__icon' />
                        <Link to="/">Đăng truyện</Link>
                    </div>
                    <div className="Navbar__right__login">
                        <Link to="/auth" className='Navbar__right__login__item'>Đăng nhập</Link>
                    </div>
                    <div className="Navbar__right__register">
                        <Link to="/auth" className='Navbar__right__login__item'>Đăng ký</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar