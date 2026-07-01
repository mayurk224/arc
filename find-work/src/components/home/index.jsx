import Header from "../header"
import "./index.css"

const Home = () => {

  return (
    <div className="home">
      <Header />
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Get your dream Job throught <span>FindWork.com</span></h1>
              <p>The internet is a job seeker's most crucial tool to success today. From
                connecting with potential employers online to researching job hunting best
                practices, it's a goldmine of opportunity.</p>
              <button type="button" className="btn btn-primary">View Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home