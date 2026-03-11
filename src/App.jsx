
import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content} from './features/layout/components/Content'
import { Article } from './features/Views/components/Article'
import { Offers } from './features/Views/components/Offers'
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorities } from './features/auth/components/Myfavorities'
import { HashRouter,Routes, Route } from 'react-router-dom'
import StatusBar from './features/layout/components/statusbar';


function App() {
  return (
    <>
      <HashRouter>

        <Header></Header>

        <StatusBar></StatusBar>

        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path="/Article" element={<Article></Article>}></Route>
          <Route path='/Offers' element={<Offers></Offers>}></Route>
          <Route path='/Myaccount' element={<Myaccount></Myaccount>}></Route>
          <Route path='/Mybuys' element={<Mybuys></Mybuys>}></Route>
          <Route path='/Myfavorities' element={<Myfavorities></Myfavorities>}></Route>
        </Routes>

        <Footer></Footer>

      </HashRouter>
    </>
  )
}

export default App
