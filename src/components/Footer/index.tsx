import './index.less'

const Footer = () => (
  <div className="footer__wrap">
    <a href="https://github.com/hello-nav/hello-nav" className="logo vertical-center">
      hello-nav github
    </a>
    <div className="footer__copyright">
      <span className="vertical-center">
        Made by
        <a className="bener-link" href="https://ziyuanxiong.cn">
          <b> 资源熊 </b>
        </a>
         & 
        <a className="bener-link" href="https://xibel.cn">
          <b> 西贝导航 </b>
        </a>
        with
        <span className="heart"> ❤</span>
      </span>
      <p>&copy;2018-{new Date().getFullYear()} Hello Nav.</p>
    </div>
  </div>
)

export default Footer
