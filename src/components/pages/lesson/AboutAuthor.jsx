export default function AboutAuthor() {
  return (
    <div className="md:w-388 flex gap-4">
      {/* <!-- Avatar --> */}
      <div className="w-[4.375rem] h-[4.375rem] shrink-0 rounded-full overflow-hidden">
        <img
          src="/assets/images/img-avatar.jpg"
          alt="Author Picture"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <!-- Description --> */}
      <div>
        <h4 className="text-lg text-brand-main-elem">Rabi Alieva</h4>
        <p className="text-xs text-[#979797]">Watercolor Artist</p>
        <div className="mt-[1.125rem] pl-3.5 border-l-2 border-l-brand-main-elem">
          <p className="text-sm text-brand-gray">
            Rabi Alieva is a watercolor artist and designer who absorbs
            different methods and techniques of how to teach drawing. She gladly
            shares her experience of how to learn to draw impressive watercolors
            in a short time.
          </p>
        </div>
      </div>
    </div>
  );
}
