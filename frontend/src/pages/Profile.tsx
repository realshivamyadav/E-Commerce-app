import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm text-center p-4">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="rounded-circle mx-auto mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h3>John Doe</h3>
            <p className="text-muted">john.doe@example.com</p>
            <button className="btn btn-outline-primary mt-2">Edit Profile</button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white"><h5 className="mb-0">Order History</h5></div>
            <div className="card-body">
              <p className="text-muted">You haven't placed any orders yet.</p>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-header bg-white"><h5 className="mb-0">Account Settings</h5></div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Password & Security <button className="btn btn-sm btn-outline-secondary">Update</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping Addresses <button className="btn btn-sm btn-outline-secondary">Manage</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;