import React from 'react'
import media from '../assets/media.png'

function ProfileCard() {
  return (
 
       <div className="col-lg-4 col-md-12">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={media} className="card-img-top" alt="Chicago Skyscrapers" />
                  <div className="card-body text-center">
                    <h5 className="card-title ">Jhon Doe</h5>
                    <p className="card-text text-muted">CEO</p>
                    <div className="d-flex justify-content-center mb-2">
                      <div>
                        <i className="fab fa-facebook-f fa-lg me-3" style={{ color: '#55acee' }} />
                        <i className="fab fa-instagram fa-lg me-3" style={{ color: '#55acee' }} />
                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
  
  )
}

export default ProfileCard
