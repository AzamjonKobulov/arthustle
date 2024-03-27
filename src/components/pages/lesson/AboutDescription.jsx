function AboutDescription() {
  return (
    <div className="flex-1 space-y-7">
      <p className="text-brand-dark">
        Welcome to the Winter Wonderland. <br />
        In this free watercolor online class you will learn how to create your
        own, unique watercolor illustration by using several reference pictures.{' '}
        <br />
        The teacher will show you with a step-by-step guidance how to paint a
        cozy winter portrait by using different watercolor techniques. <br />
        This course is also suitable for beginners, due to its detailed
        explanations.
      </p>

      {/* <!-- Button --> */}
      <button className="h-10 relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-brand-main-elem text-white border border-transparent rounded-full hover:bg-white hover:text-brand-main-elem hover:border-brand-main-elem transition-all duration-300 px-8">
        To course description
      </button>
    </div>
  );
}

export default AboutDescription;
