import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__backgroud">
                <img src="https://metruyenchu.com/assets/images/footer-bg.png" alt="" />
            </div>
            <div className="Footer__info">
                <img src="https://metruyenchu.com/assets/images/logo.png?130223" alt="" className='logo' />
                <div className="Footer__info__description">
                    Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
                </div>
                <div className="Footer__info__appDownload">
                    <img src="https://metruyenchu.com/assets/images/app-store.png?130223" alt="" />
                    <img src="https://metruyenchu.com/assets/images/google-play.png?130223" alt="" />
                </div>
                <div className="Footer__info__button">
                    <a href="https://metruyenchu.com/thong-tin/dieu-khoan-dich-vu" className='Footer__info__button__item'>Điều khoản dịch vụ</a>
                    <a href="https://metruyenchu.com/thong-tin/chinh-sach-bao-mat" className='Footer__info__button__item'>Chính sách bảo mật</a>
                    <a href="https://metruyenchu.com/thong-tin/ve-ban-quyen" className='Footer__info__button__item'>Về bản quyền</a>
                    <a href="https://metruyenchu.com/thong-tin/hoi-dap" className='Footer__info__button__item'>Hỏi đáp</a>
                </div>
            </div>
        </div>
    )
}

export default Footer