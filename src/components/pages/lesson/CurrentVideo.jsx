export default function CurrentVideo() {
  return (
    <div className="flex-1">
      <a
        href="#"
        className="hidden sm:block text-sm text-brand-gray hover:text-brand-main-elem"
      >
        #Portrait
      </a>

      <video
        controls
        className="w-full lg:min-h-[26.625rem] aspect-video rounded-md mt-3.5"
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
}
