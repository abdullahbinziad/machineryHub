import quotStart from "../../assets/quot-start.png";
import quotEnd from "../../assets/quot-end.png";
const DirectorMessage = () => {
  return (
    <>
      <div className="text-black py-10 md:py-20 md:w-3/4 mx-auto grid md:grid-cols-2 items-center gap-5">
        <div>
          <h2 className="ml-5 underline font-bold text-lg md:text-2xl">
            Message From Managing Director.
          </h2>
          <div
            data-aos="zoom-in"
            className="md:max-w-md w-4/6 md:w-full relative mx-auto mt-10 md:mt-20"
          >
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
            src="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg"
            alt="Director"
            className="w-60 h-60 object-cover mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default DirectorMessage;