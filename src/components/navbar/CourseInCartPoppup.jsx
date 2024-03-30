export default function CourseInCartPoppup() {
  return (
    <div className="flex flex-col sm:flex-row md:items-center gap-8 py-5">
      {/* <!-- Course Image --> */}
      <div className="h-[5.625rem] w-[7.5rem] overflow-hidden rounded">
        <img
          src="./assets/images/img-course-payment.jpeg"
          alt="Course Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <!-- Info --> */}
      <div className="flex-1 space-y-4 text-brand-gray">
        <h4 className="max-w-64 text-start text-lg">
          Selling a iPhone 11 Pro to the11 Pro ATM Machsirine
        </h4>
        {/* <!-- Cost --> */}
        <div className="flex sm:flex-col md:flex-row lg:flex-col xl:flex-row xl:items-center justify-between md:gap-8 lg:gap-2 xl:gap-12">
          <div className="flex items-center gap-1 text-xs uppercase text-brand-gray-5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-brand-gray-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 0.583313C3.44166 0.583313 0.583328 3.44165 0.583328 6.99998C0.583328 10.5583 3.44166 13.4166 7 13.4166C10.5583 13.4166 13.4167 10.5583 13.4167 6.99998C13.4167 3.44165 10.5583 0.583313 7 0.583313ZM6.99999 12.25C4.08333 12.25 1.74999 9.91665 1.74999 6.99998C1.74999 4.08331 4.08333 1.74998 6.99999 1.74998C9.91666 1.74998 12.25 4.08331 12.25 6.99998C12.25 9.91665 9.91666 12.25 6.99999 12.25ZM9.15833 9.15831C9.39166 8.92498 9.39166 8.57498 9.15833 8.34165L7.58333 6.76665V3.49998C7.58333 3.14998 7.34999 2.91665 6.99999 2.91665C6.64999 2.91665 6.41666 3.14998 6.41666 3.49998V6.99998C6.41666 7.17498 6.47499 7.29165 6.59166 7.40831L8.34166 9.15831C8.45833 9.27498 8.57499 9.33331 8.74999 9.33331C8.92499 9.33331 9.04166 9.27498 9.15833 9.15831Z"
                fill="black"
              />
              <mask
                id="mask0_1903_23292"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0.583313C3.44166 0.583313 0.583328 3.44165 0.583328 6.99998C0.583328 10.5583 3.44166 13.4166 7 13.4166C10.5583 13.4166 13.4167 10.5583 13.4167 6.99998C13.4167 3.44165 10.5583 0.583313 7 0.583313ZM6.99999 12.25C4.08333 12.25 1.74999 9.91665 1.74999 6.99998C1.74999 4.08331 4.08333 1.74998 6.99999 1.74998C9.91666 1.74998 12.25 4.08331 12.25 6.99998C12.25 9.91665 9.91666 12.25 6.99999 12.25ZM9.15833 9.15831C9.39166 8.92498 9.39166 8.57498 9.15833 8.34165L7.58333 6.76665V3.49998C7.58333 3.14998 7.34999 2.91665 6.99999 2.91665C6.64999 2.91665 6.41666 3.14998 6.41666 3.49998V6.99998C6.41666 7.17498 6.47499 7.29165 6.59166 7.40831L8.34166 9.15831C8.45833 9.27498 8.57499 9.33331 8.74999 9.33331C8.92499 9.33331 9.04166 9.27498 9.15833 9.15831Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1903_23292)">
                <rect width="14" height="14" className="fill-brand-gray-5" />
              </g>
            </svg>
            <span>2 месяца</span>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="text-brand-main-elem font-medium">0,99$</p>
            <p className="font-light">
              <span className="line-through">14.99 $</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
