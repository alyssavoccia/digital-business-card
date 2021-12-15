import profileImage from '../assets/image.jpeg';

function Info() {
  return (
    <div>
      <img className="profile-img" src={profileImage} alt='Alyssa' />
      <h1 className="info-title">Alyssa Voccia</h1>
      <p className="info-subtitle">Frontend Developer</p>
      <a className="info-link" href="https://alyssavoccia.github.io/">alyssavoccia.github.io</a>
      <div className="buttons">
        <a href='mailto:alyssa.voccia@gmail.com' className="social-button email"><i class="fas fa-envelope"></i> Email</a>
        <a target='blank' href='https://www.linkedin.com/in/alyssa-voccia/' className="social-button linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>
  )
}

export default Info;