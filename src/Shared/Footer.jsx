

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-200 text-base-content">
        <aside>

          <div className="flex justify-center items-center">
            <img className="h-5 md:h-10" src="https://i.ibb.co/jLtcMKC/teal.png" alt="" />
            <div className="font-bold  ">
                <h1 className="text-teal-600 font-display md:font-extrabold text-[9px] md:text-xl">Elite Estate</h1>
                <h1 className="text-slate-700 -mt-2 text-[8px] md:text-base">Discoveries</h1>
            </div>
          </div>


          <p>Elite Estate Discoveries Ltd.<br/>Since 1999</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;