import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className='footer_top left'>
                    <div className="footer_logo logo5"/>
                    <div className="footer_top text">Пермская региональная общественная организация<br/>
                        по поддержке семьи, материнства, отцовства и детства «НАСМНОГО»<br/>
                        г. Пермь, ул. Пермская, 61В<br/>
                        mpk59@yandex.ru<br/> 
                        https://насмного59.рф<br/> 
                        https://vk.com/nasmnogo59<br/>
                    </div>
                </div> 
                <div className='footer_top right'>
                    <div className='footer_logo_top'>
                        <div className='footer_logo logo1'></div>
                        <div className='footer_logo logo2'></div>
                    </div>
                    <div className='footer_logo_bottom'>
                        <div className='footer_logo logo3'></div>
                        <div className='footer_logo logo4'></div>
                    </div>
                    
                </div>
            </div>
            
            <div className="footer_bottom text">
                © 2023, ПРОО “Нас много”
            </div>
        </div>
    )
}

export default Footer;