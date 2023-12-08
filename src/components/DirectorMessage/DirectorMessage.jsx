import quotStart from "../../assets/quot-start.png";
import quotEnd from "../../assets/quot-end.png";
import directorImage from "../../assets/owner/Md.Masud_Rana_Pervaz.png";
const DirectorMessage = () => {
  return (
    <>
      {/* <div className="text-black py-10 md:py-20 md:w-3/4 mx-auto grid md:grid-cols-2 items-center gap-5">
        <div>
          <h2 className="ml-5 underline font-bold text-lg md:text-2xl">
            Message From Managing Director.
          </h2>
          <div className="md:max-w-md w-4/6 md:w-full relative mx-auto mt-10 md:mt-20">
            <span className="absolute -top-5 -left-10">
              <img src={quotStart} alt="Quot start" className="w-5" />
            </span>
            <span className="absolute -top-5 -right-10">
              <img src={quotEnd} alt="Quot start" className="w-5" />
            </span>
            <p className="text-justify text-sm font-sans ">
              At NP Internationals, our mission is clear: to bring innovation
              and reliability to your industries. We're committed to providing
              cutting-edge machinery solutions that power your success. Thank
              you for choosing us as your trusted partner in growth and
              efficiency.
            </p>
          </div>
        </div>
        <div>
          <img
            src={directorImage}
            alt="Director"
            className="w-60 h-64 object-cover mx-auto rounded-full"
          />
        </div>
      </div> */}
      <div className="max-w-5xl mx-auto mt-20">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 ring-2 ring-gray-200 shadow-md overflow-hidden mx-2">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={directorImage}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Bismillahir Rahmanir Raheem, Welcome to Np International Bd,
                Our Greatest asset is the customer! Treat each customer as if
                they are the only one! Our Mission is clear: to bring innovation
                and reliability to your industries. We are committed to
                providing latest technology machinery, spare parts and solutions
                that is power of your success. Thank you for keep us as your
                trusted business partner in growth and efficiency.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-light-blue-500 font-roboto">
                Md. Masud Rana Pervaz
              </div>
              <div class="text-gray-700 font-roboto text-sm">
                Managing Director, NP International
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
};

export default DirectorMessage;
