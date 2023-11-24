const Advertisement = () => {
  return (
   <div>

    <div>
        <div className="border-5 border-x-teal-600"></div>
    </div>




     <div className="py-16 px-8 md:px-10 lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-56"
              src="https://i.ibb.co/k5PBTR1/e2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-56"
              src="https://i.ibb.co/xjps5bG/w.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-56"
              src="https://i.ibb.co/db4QKg8/h3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-56"
              src="https://i.ibb.co/SXKT2nF/pexels-binyamin-mellish-1396132.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>

  );
};

export default Advertisement;
