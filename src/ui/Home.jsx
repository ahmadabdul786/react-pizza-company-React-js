import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" text-center">
      <h1 className="mb-8 text-xl text-stone-700 font-sans">
        The best pizza.
        <br />
        <span className="text-yellow-500 md:text-3xl ">
          Straight out of the oven, straight to you.
        </span>
        <CreateUser/>
      </h1>
      
    </div>
  );
}

export default Home;
