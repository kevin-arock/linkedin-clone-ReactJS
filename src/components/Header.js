import HeaderOptions from "./HeaderOptions"
import { Home, HomeMaxRounded, Search } from "@mui/icons-material"
const Header = ()=>{
    const opt = ['home','network','jobs']
    return(
        <div className="header">
            <div className='header-left'>
                <img src='' alt="logo"/>
                <div className='search'>
                <Search/>
                <input type="text" />        

                </div>
            </div>
            <div className='header-right'>
               { opt.map((opt)=> <HeaderOptions Icon={HomeMaxRounded} title={opt}/>) }
            </div>
        
        </div>
    )
}



export default Header;