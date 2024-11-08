import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import Tabs from './Tabs';

const Profile = () => {
  const [bannerURL, setBannerURL] = useState(
    'https://via.placeholder.com/1500x400'
  );

  const [profileURL, setProfileURL] = useState(
    'https://via.placeholder.com/100'
  );

  const handleBannerChange = (event: any) => {
    const bannerFile = event.target.files[0];
    if (bannerFile) {
      setBannerURL(URL.createObjectURL(bannerFile));
    }
  };

  const handleProfileChange = (event: any) => {
    const profileFile = event.target.files[0];
    if (profileFile) {
      setProfileURL(URL.createObjectURL(profileFile));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerURL}
          alt="background image"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Logo */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileURL}
          alt="Logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[3.75rem] mt-[9rem] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        {/* Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Cetin</h1>
          <p className="ml-[4rem]">1M</p>
          <p className="mt-2 ml-[4rem]">Lorem ipsum</p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 ml-[4rem]">
            Get in touch
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
