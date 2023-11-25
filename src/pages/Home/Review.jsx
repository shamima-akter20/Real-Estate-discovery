
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className="py-16">
      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          User Review
        </h1>
        <p className="text-xs md:text-base">
          Discover the essence of home through our clients stories in our review
          section.
        </p>
      </div>

      <div className='py-9'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
             <div className="flex gap-4">
                 <img className="h-40 w-24 rounded" src="https://i.ibb.co/T8vjZJV/person.jpg" alt="" />
                  <div className="flex flex-col justify-center text-slate-500">
                  <h1 className="font-display  text-lg">Jesica Martinez</h1>
                  <h2 className='text-sm font-bold'>Property Title : Cozy Cottage</h2>
                  <p className="text-sm ">Exceptional service from start to finish! The team at <span className="text-teal-600 font-display">Elite Estate</span><span className="text-slate-700 font-display"> Discoveries </span> made my home-buying journey smooth and stress-free. Highly recommend their expertise and dedication.</p>
                  <div className="rating">
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  checked />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  </div>
                  </div>
             </div>
             <div className="flex gap-4">
                 <img className="h-40 w-24 rounded" src="https://i.ibb.co/yqvfNX8/person2.jpg" alt="" />
                  <div className="flex flex-col justify-center text-slate-500">
                  <h1 className="font-display  text-lg">Jane Doe</h1>
                  <h2 className='text-sm font-bold'>Property Title : Modern Loft</h2>
                  <p className="text-sm ">Found my dream home with  <span className="text-teal-600 font-display">Elite Estate</span><span className="text-slate-700 font-display"> Discoveries </span>! Professional, transparent, and always there to address concerns. Grateful for the seamless process.</p>
                  <div className="rating">
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  checked />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  </div>
                  </div>
             </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
             <div className="flex gap-4">
                 <img className="h-40 w-24 rounded" src="https://i.ibb.co/TbqpG7L/person3.jpg" alt="" />
                  <div className="flex flex-col justify-center text-slate-500">
                  <h1 className="font-display  text-lg">Adriana Smith</h1>
                  <h2 className='text-sm font-bold'>Property Title : Mountain View Chalet</h2>
                  <p className="text-sm ">Impressed by the in-depth market knowledge and guidance provided by <span className="text-teal-600 font-display">Elite Estate</span><span className="text-slate-700 font-display"> Discoveries </span> . They not only met but exceeded my expectations. A trustworthy real estate partner.</p>
                  <div className="rating">
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  checked />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  </div>
                  </div>
             </div>
             <div className="flex gap-4">


                 <img className="h-40 w-24 rounded" src="https://i.ibb.co/SPp3JP6/person4.jpg" alt="" />
                  <div className="flex flex-col justify-center text-slate-500">
                  <h1 className="font-display  text-lg">Will  Worth </h1>
                  <h2 className='text-sm font-bold'>Property Title : Lakeside Retreat</h2>
                  <p className="text-sm ">Exceptional service from start to finish! The team at <span className="text-teal-600 font-display">Elite Estate</span><span className="text-slate-700 font-display"> Discoveries </span> made my home-buying journey smooth and stress-free. Highly recommend their expertise and dedication.</p>
                  <div className="rating">
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  checked />
                       <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                  </div>
                  </div>
             </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img  className='h-56 w-56' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-56'  src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-56'  src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-56' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-56' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-56'  src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-56' src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
      </div>
      

     
    </div>
  );
};

export default Review;
