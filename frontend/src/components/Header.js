import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { LuSearch } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  // const [menuDisplay, setMenuDisplay] = useState(false);
  // const context = useContext(Context);
  const navigate = useNavigate();
  // const searchInput = useLocation();
  // const URLSearch = new URLSearchParams(searchInput?.search);
  // const searchQuery = URLSearch.getAll("q");
  // const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }

  }

  // const handleSearch = (e) => {
  //   const { value } = e.target
  //   setSearch(value)

  //   if (value) {
  //     navigate(`/search?q=${value}`)
  //   } else {
  //     navigate("/search")
  //   }
  // }
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here..' className='w-full outline-none' 
          // onChange={handleSearch} value={search} 
          />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <LuSearch />
          </div>
        </div>

        <div className='flex items-center gap-9'>

          <div className='text-3xl cursor-pointer' 
          // onClick={() => setMenuDisplay(preve => !preve)}
          >
            {
              user?.profilePic ? (
                <img src={user?.profilePic} 
                className='w-9 h-9 rounded-full' 
                alt={user?.name} 
                />
              ) : (
                <FaRegUserCircle />
              )
            }
          </div>

          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-500 w-5 h-5 rounded-full flex-1 text-white flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            {/* <Link to={"/login"} className='bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700'>Login</Link> */}
            {
              user?._id ? (
                <button 
                onClick={handleLogout} 
                className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
              )
                : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
                )
            }
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header
