import imgHeader from '../img/imgHeader.png';

const Header = () => {
   
    return(
        <div className="header">
            <div className="header-img">
                <img src={imgHeader} alt="rick and morty" />
            </div>
            <h1>Characters of Rick and Morty</h1>
        </div>
    )
}

export default Header;