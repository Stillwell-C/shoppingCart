import creatorImg from "../assets/creator.jpg";
import contactImg from "../assets/hennie-stander-wO8zbE8iAas-unsplash.jpg";

const About = () => {
  return (
    <section className='w-full bg-about-background bg-fixed bg-no-repeat bg-cover'>
      <div className='min-h-screen'>
        <div className='mt-[55vh] text-right mr-[10vw] text-white text-7xl font-semibold'>
          Who are we?
        </div>
      </div>
      <div className='bg-white min-w-full flex flex-col items-center pb-20'>
        <div className='w-4/5 xl:w-[1024px]'>
          <div className='my-12 text-center'>
            <h2 className='text-4xl font-light mb-8'>Our Beginnings</h2>
            <div className='flex flex-col gap-4 text-lg'>
              <p>
                in hands had its humble beginnings as a creative outlet for
                Elena Cojocaru's university side projects. She soon began to
                peddle unique design pieces on the streets of Chișinău with some
                success. It further materialized into its current incarnation in
                2018.
              </p>
              <p>
                Over time, Elena grew her side project into a small fashion
                house and then into a budding powerhouse in the Moldovan design
                scene. Word soon spread that in hands was the nation's premier
                house for all things fashion and lifestyle. With overwhelming
                customer support and numerous media appearances, Elena has
                rapidly scaled the business to meet the unprecidented foreign
                and domestic demand while maintaining strict creative and
                quality control.
              </p>
              <p>
                Contrary to the defamitory claims of another Moldovan fashion
                house that will not be named, we are proud to say that our
                factory has met the minimum requirements set by the Ministry of
                Labour and Social Protection since 2023.
              </p>
            </div>
          </div>
          <div className='my-12'>
            <h2 className='text-4xl font-light mb-8 text-center'>
              Our Creator
            </h2>
            <div className='flex items-center gap-8'>
              <img
                className='w-3/5 lg:w-[600px] rounded-sm'
                src={creatorImg}
                alt='Elena Cojocaru'
              />
              <p className='text-lg'>
                Hi, My name is Elena. In addition to my work at in hands I enjoy
                crocheting.
              </p>
            </div>
          </div>
          <div className='my-12'>
            <h2 className='text-4xl font-light mb-8 text-center'>
              Get in Contact!
            </h2>
            <div className='flex items-center gap-8'>
              {" "}
              <p className='text-lg'>
                Questions, comments, concerns? in hands is able to create custom
                design pieces to fit your needs and desires. We are also always
                looking to collaborate with inspiring artisans and designers.
              </p>
              <img
                className='w-3/5 lg:w-[600px] rounded-sm'
                src={contactImg}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
