import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero text='Welcome to React 101' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, rerum? Assumenda, voluptatem? Doloribus aliquid quidem
              animi quod deleniti cupiditate deserunt, modi itaque rerum quae
              magnam saepe, voluptatum totam consequuntur illo?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
