import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Article = () => {
  return (
    <section className='article-sect'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2'>
          <img
            src='/assets/images/moringa-bg.jpeg'
            alt='featured article'
            className='h-48 md:h-80 w-full object-cover'
          />
        </div>
        <div className='col-span-1 bg-default-green p-4'>
          <h4 className='text-amber-400 text-md font-semibold mb-3 md:md-0 md:my-3'>
            Related Articles
          </h4>
          <ul className='text-gray-400 text-md list-inside list-disc'>
            <li className='border-top py-2 border-amber-400 text-amber-400'>
              Computers will steal your job
            </li>
            <li className='border-top py-2 border-amber-400 w-full text-amber-400'>
              300 days of code challenge
            </li>
            <li className='border-top py-2 border-amber-400 w-full text-amber-400'>
              Shut down to save energy
            </li>
            <li className='border-top py-2 border-amber-400 w-full text-amber-400'>
              Code for sustainable future
            </li>
            <li className='border-top py-2 border-amber-400 w-full text-amber-400'>
              Kenya's Best Programmers
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2 p-8'>
          <h3 className='text-default-green font-semibold text-xl md:text-3xl'>
            How to get rid of your tech junk?
          </h3>
          <div className='mt-2 d-md-none'>
            <div className='flex justify-between text-slate-300 text-md'>
              <div className='flex gap-1 items-center'>
                <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
                <h6 className='my-auto'>John Doe</h6>
              </div>
              <div className='flex gap-1 items-center'>
                <i
                  className='fa fa-clock-o'
                  aria-hidden='true'
                  style={{ fontSize: "18px" }}
                ></i>
                <h6 className='my-auto'>1st Nov 2023</h6>
              </div>
            </div>
            <div className='flex text-default-gold my-3'>
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
            </div>
          </div>
          <p className='text-gray-700 py-3 text-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            aliquid eaque. Reiciendis exercitationem quo, non numquam impedit
            repellat. A sequi sunt quibusdam necessitatibus qui perferendis quos
            doloribus quas molestias vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum porro aperiam facere
            commodi assumenda voluptatibus accusamus ipsum suscipit corporis
            minus sint eaque nobis vel, magnam obcaecati eum magni possimus
            itaque.
          </p>
          <p className='text-gray-700 py-3 text-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            aliquid eaque. Reiciendis exercitationem quo, non numquam impedit
            repellat. A sequi sunt quibusdam necessitatibus qui perferendis quos
            doloribus quas molestias vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum porro aperiam facere
            commodi assumenda voluptatibus accusamus ipsum suscipit corporis
            minus sint eaque nobis vel, magnam obcaecati eum magni possimus
            itaque.
          </p>
          <p className='text-gray-700 py-3 text-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            aliquid eaque. Reiciendis exercitationem quo, non numquam impedit
            repellat. A sequi sunt quibusdam necessitatibus qui perferendis quos
            doloribus quas molestias vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum porro aperiam facere
            commodi assumenda voluptatibus accusamus ipsum suscipit corporis
            minus sint eaque nobis vel, magnam obcaecati eum magni possimus
            itaque.
          </p>
          <p className='text-gray-700 py-3 text-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            aliquid eaque. Reiciendis exercitationem quo, non numquam impedit
            repellat. A sequi sunt quibusdam necessitatibus qui perferendis quos
            doloribus quas molestias vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum porro aperiam facere
            commodi assumenda voluptatibus accusamus ipsum suscipit corporis
            minus sint eaque nobis vel, magnam obcaecati eum magni possimus
            itaque.
          </p>
          <p className='text-gray-700 py-3 text-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            aliquid eaque. Reiciendis exercitationem quo, non numquam impedit
            repellat. A sequi sunt quibusdam necessitatibus qui perferendis quos
            doloribus quas molestias vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum porro aperiam facere
            commodi assumenda voluptatibus accusamus ipsum suscipit corporis
            minus sint eaque nobis vel, magnam obcaecati eum magni possimus
            itaque.
          </p>
          <div className='flex justify-end my-3'>
            <button className='bg-red-600 rounded py-1 px-3 text-white cursor-pointer'>
              Edit
            </button>
          </div>
          <h5 className='text-amber-400 text-xl'>Add Comment</h5>
          <textarea
            rows={3}
            className='w-full md:w-3/5 border focus:outline-none text-gray-700 py-1 px-2 rounded mt-3'
          ></textarea>
          <div className='w-full md:w-3/5 h-16 flex items-end'>
            <div className='w-3/5'>
              <h6 className='text-amber-400 text-md py-1'>Rate the article</h6>
              <select className='w-full border focus:outline-none px-3 py-1 text-gray-700 text-md italic rounded'>
                <option value='5'>5 - Very Good</option>
                <option value='4'>4 - Good</option>
                <option value='3'>3 - Average</option>
                <option value='2'>2 - Poor</option>
                <option value='1'>1 - Very Poor</option>
              </select>
            </div>
            <button className='w-2/5 bg-default-gold  ml-1  text-md rounded py-1 text-white cursor-pointer'>
              Submit
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white px-8 pt-8 md:pr-8 mb-3'>
          <div className='d-none d-md-block'>
            <div className='flex justify-between text-slate-300 text-md'>
              <div className='flex gap-1 items-center'>
                <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
                <h6 className='my-auto'>John Doe</h6>
              </div>
              <div className='flex gap-1 items-center'>
                <i
                  className='fa fa-clock-o'
                  aria-hidden='true'
                  style={{ fontSize: "18px" }}
                ></i>
                <h6 className='my-auto'>1st Nov 2023</h6>
              </div>
            </div>
            <div className='flex text-default-gold my-3'>
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
            </div>
          </div>
          <div className='border border-amber-400 border-2 px-8 md:mt-5 py-3'>
            <h6 className='text-amber-400 text-md mb-1'>
              Administrator Controls
            </h6>
            <div className='mt-2 flex gap-3'>
              <input type='radio' className='w-5 h-5' />
              <h6 className='my-auto text-gray-600 text-md'>Add to wishlist</h6>
            </div>
            <div className='mt-2 flex gap-3'>
              <input type='radio' className='w-5 h-5' />
              <h6 className='my-auto text-gray-600 text-md'>Flag</h6>
            </div>
            <div className='mt-2 flex gap-3'>
              <input type='radio' className='w-5 h-5' />
              <h6 className='my-auto text-gray-600 text-md'>Remove</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
