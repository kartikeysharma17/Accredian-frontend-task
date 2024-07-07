import herobg from "../../assets/images/herobg.png";
import heroimg from "../../assets/images/heroimg.png";
import Modal from "../Modal/modal";
import { useState } from "react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
    console.log("refferal Data:", data);

    try {
      const response = await fetch(
        "http://localhost:8000/api/refferal-detail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Success:", result);
      handleCloseModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="flex justify-center bg-cover bg-center mt-10 "
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="w-full lg:w-3/4 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="py-10 px-10 lg:py-20 lg:px-20 text-center lg:text-left">
              <div className="text-4xl lg:text-7xl">
                Let's Learn <br /> & Earn{" "}
              </div>
              <div className="text-2xl lg:text-5xl mt-5 lg:mt-10">
                Get a chance to win up to{" "}
                <span className="text-[#1A73E8]">Rs. 15,000</span>
              </div>
              <div className="mt-10 lg:mt-20">
                <button
                  onClick={handleOpenModal}
                  className="bg-[#1A73E8] px-5 py-2 text-white rounded-md"
                >
                  Refer Now
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <img src={heroimg} alt="" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
