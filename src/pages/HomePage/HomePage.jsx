import Appreciate from '../../components/Appreciate/Appreciate'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import NewBook from '../../components/NewBook/NewBook'
import NewUpdate from '../../components/NewUpdate/NewUpdate'
import NominateEditor from '../../components/NominateEditor/NominateEditor'
import TopBook from '../../components/TopBook/TopBook'
import './HomePage.scss'

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <NominateEditor />
            <NewUpdate />
            <TopBook />
            <Appreciate />
            <NewBook />
            <Footer />
        </div>
    )
}

export default HomePage