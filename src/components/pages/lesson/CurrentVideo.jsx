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
        className="w-full max-h-[32.6875rem] lg:max-h-[26rem] h-full rounded-md mt-3.5"
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
}
