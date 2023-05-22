import './footer.scss'

function Footer({logo, description, text}) {
  return (
	  <footer className='footer'>
      <div >
        <img className="footerImg" src={logo} alt={description} />
      </div>
      <div className="footerTitle">{text}</div>
    </footer>   
  )
}

export default Footer
