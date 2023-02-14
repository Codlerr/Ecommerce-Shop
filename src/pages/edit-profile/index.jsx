import React from "react";

let user =
  "https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676270820/Ecommerce-shop/vxx_npuato.webp";

function EditProfile() {
  return (
    <>
      <section className="xs:w-10/12 lg:w-8/12 mx-auto">
        <div className="grid grid-cols-1 xs:gap-10 md:gap-5 lg:gap-10 md:grid-cols-4 py-10">
          <div className="border-2 rounded-xl px-5 relative overflow-hidden h-fit">
            <h3 className="pt-3 font-medium text-lg">Account</h3>
            <p className="text-base">Jane doe</p>
            <hr className="my-2" />
            <ul className="flex flex-col xs:gap-3 md:gap-1 lg:gap-3">
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Gift cards</li>
              <li>Contact</li>
            </ul>
            <hr className="my-2" />
            <ul className="flex flex-col xs:gap-3 md:gap-1 lg:gap-3 xs:pb-20 lg:pb-16">
              <li>Coupons</li>
              <li>Saved Cards</li>
              <li>Saved Addresses</li>
            </ul>
            <button className=" flex items-center justify-center bg-black h-10 text-white w-full absolute bottom-0 right-0">
              <i class="fa-solid fa-arrow-right-from-bracket pr-2"></i>Logout
            </button>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3 xs:mx-auto md:mx-0">
            <h2 className="text-xl font-medium">Edit Profile</h2>
            <div className="flex xs:flex-col md:flex-row gap-5">
              <div className="relative h-fit w-fit">
                <img
                  className="h-28 rounded-full  object-cover "
                  src={user}
                  alt="user"
                />
                <button>
                  <i class="absolute bottom-6 right-5 text-gray-600 bg-gray-300 p-1 rounded-full fa-solid fa-camera"></i>
                </button>
              </div>
              <div className="xs:w-72 md:w-80">
                <form className="flex flex-col gap-6">
                  <div className="relative">
                    <label className="absolute -top-2 bg-white left-5 text-[10px] font-medium text-gray-400">
                      FULL NAME
                    </label>
                    <input
                      className="w-full outline-none rounded-2xl border-2 px-3 py-1"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2 bg-white left-5 text-[10px] font-medium text-gray-400">
                      EMAIL
                    </label>
                    <input
                      className="w-full outline-none rounded-2xl border-2 px-3 py-1"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2 bg-white left-5 text-[10px] font-medium text-gray-400">
                      MOBILE NUMBER
                    </label>
                    <input
                      className="w-full outline-none overflow-hidden rounded-2xl border-2 px-3 py-1"
                      type="number"
                      name="number"
                    />
                    <button className="bg-black w-24 h-full rounded-r-2xl absolute top-0 right-0 text-white">
                      Verify
                    </button>
                  </div>
                  {/* <p className='text-[10px] text-green-500 -mt-3'>Mobile number verified</p> */}
                  <div className="relative flex  justify-around font-light  rounded-2xl border-2 px-3 py-1">
                    <span className="flex gap-2">
                      <input type="radio" name="gender" />
                      <p>Male</p>
                    </span>
                    <span className="flex gap-2">
                      <input type="radio" name="gender" />
                      <p>Female</p>
                    </span>
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2 bg-white left-5 text-[10px] font-medium text-gray-400">
                      DATE OF BIRTH
                    </label>
                    <input
                      className="w-full outline-none rounded-2xl border-2 px-3 py-1"
                      type="date"
                      name="date"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2 bg-white left-5 text-[10px] font-medium text-gray-400">
                      ALTERNATIVE MOBILE NUMBER
                    </label>
                    <input
                      className="w-full outline-none rounded-2xl border-2 px-3 py-1"
                      type="number"
                      name="number"
                    />
                  </div>
                  <button className="bg-black border-2 border-black hover:bg-white hover:text-black text-white h-9 rounded-3xl transition-all duration-300">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
