import HalfCard from "../components/HalfCard";
import MainCard from "../components/MainCard";
import VertivalCard from "../components/VerticalCard";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute w-full bg-black bot -z-10"
          style={{ height: "150vh" }}
        ></div>
        <div className="container mx-auto pt-5 px-5">
          <img
            src="https://images.prismic.io/snowpeak/ZpaxRx5LeNNTxNfH_DSC09855.png?auto=format%2Ccompress&rect=0%2C384%2C3000%2C1438&w=1920&h=920&fit=max"
            alt=""
            className="w-full rounded-2xl aspect-video mb-5"
          />
          <div className="flex justify-between pb-10">
            <h5 className="text-white text-lg">
              Explore the 50+ campsite we're launching as part of our places
            </h5>
            <button className="bg-white text-black p-2 rounded-xl cursor-pointer text-nowrap">
              Learn more
            </button>
          </div>
          <div className="relative mb-10">
            <img
              src="https://cdn.backpacker.com/wp-content/uploads/2014/11/lit-up-tent-against-night-sky.jpg"
              alt=""
              className="w-full rounded-2xl aspect-video"
            />
            <div className="absolute flex bottom-10  w-full  items-center flex-col">
              <h1 className="text-white text-4xl text-center font-bold py-2">
                Not sure where to go? Perfect.
              </h1>
              <button
                type="button"
                className="text-violet-500 rounded-2xl p-3 bg-white cursor-pointer"
              >
                Im Flexible
              </button>
            </div>
          </div>
          <MainCard title="Inspiration for your camp type" id="campType">
            <div className="flex gap-5 flex-col lg:flex-row items-center">
              <VertivalCard
                imageUrl="https://static.vecteezy.com/system/resources/previews/002/376/765/non_2x/camp-site-in-lake-and-mountain-landscape-free-vector.jpg"
                location="Mountain Camp"
                distance="Relax with the adrenaline"
              />
              <VertivalCard
                imageUrl="https://www.freevector.com/uploads/vector/preview/43083/vecteezysummer-camp-backgroundZM0521_generated.jpg"
                location="River Camp"
                distance="Feel free with the water song"
              />
              <VertivalCard
                imageUrl="https://img.freepik.com/free-vector/cartoon-camp-tent-forest_107791-32609.jpg"
                location="Forest Camp"
                distance="Its just you and nature"
              />
              <VertivalCard
                imageUrl="https://static.vecteezy.com/system/resources/previews/007/684/240/non_2x/camping-with-camper-van-background-free-vector.jpg"
                location="Camper Camp"
                distance="The flexibility camping"
              />
            </div>
          </MainCard>
          <div className="relative mb-10" id="joinCC">
            <img
              src="https://images.wallpaperscraft.com/image/single/night_campfire_camping_149931_3840x2160.jpg"
              className="w-full aspect-video object-cover rounded-2xl"
              alt=""
            />
            <div className="absolute bottom-0 w-full h-full flex">
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
                <h1 className="text-white text-2xl font-medium my-2">
                  Introduce
                </h1>
                <h1 className="text-6xl text-white font-bold my-2">Camp Card</h1>
                <p className="text-white my-2">Get all access to our campsite</p>
                <div className="">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-2xl my-2 cursor-pointer"
                  >
                    Get it Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <MainCard title="Discover the Activities" id="activities">
            <div className="flex gap-5">
              <HalfCard imageUrl="https://i.pinimg.com/564x/aa/32/e8/aa32e8e5d66779890f564c51e9ec31a3.jpg">
                <h1 className="text-white text-3xl lg:text-5xl font-medium">
                  Things to do on your camp
                </h1>
                <button
                  type="button"
                  className="py-2 px-5 bg-white rounded-xl my-5 cursor-pointer"
                >
                  Find it!
                </button>
              </HalfCard>
              <HalfCard imageUrl="https://theexpertcamper.co.uk/wp-content/uploads/2024/06/how-to-make-your-camping-trip-more-comfortable-ZF.jpeg">
                <h1 className="text-white text-3xl lg:text-5xl font-medium">
                  Things to bring on your camp
                </h1>
                <button
                  type="button"
                  className="py-2 px-5 bg-white rounded-xl my-5 cursor-pointer"
                >
                  Check it!
                </button>
              </HalfCard>
            </div>
          </MainCard>
          <div className="mb-10 relative">
            <img
              src="https://cascadedesigns.com/cdn/shop/articles/night-camp-scene.jpg"
              alt=""
              className="w-full rounded-2xl object-cover aspect-video"
            />
            <div className="absolute top-0 w-full h-full flex">
              <div className="w-1/2 flex flex-col justify-around m-10">
                <h1 className="text-white text-3xl lg:text-4xl font-medium">Question About Your Camp?</h1>
                <div className="">
                  <button
                    type="button"
                    className="py-2 px-5 rounded-xl bg-white cursor-pointer"
                  >
                    Ask Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
