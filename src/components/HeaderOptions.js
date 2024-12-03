import '../App.css';
const HeaderOptions = ({Icon, title})=>{
    return(
        <div className="options">
            {<Icon/>}
            <h5>{title}</h5>
        </div>
    )
}

export default HeaderOptions;