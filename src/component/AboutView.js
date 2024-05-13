import Hero from './Hero';

const AboutView = () => {
  return (
    <>
      <Hero text='About us' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi ea magni possimus officiis enim totam quis praesentium maxime! Reiciendis enim nesciunt sunt aspernatur deleniti impedit voluptatum ipsum est perspiciatis esse ipsam nihil fuga nemo corporis sequi, saepe, corrupti quaerat recusandae voluptates nostrum vero assumenda. Quam, tenetur. Reiciendis, delectus molestias.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
