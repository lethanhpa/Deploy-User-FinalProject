import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { BackTop } from "antd";
import axiosClient from "@/libraries/axiosClient";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post(
        "/customers/send-email",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Gửi yêu cầu thành công", 1.5);
      } else {
        toast.error("Gửi yêu cầu thất bại", 1.5);
      }
    } catch (error) {
      alert("Error sending email: " + error.toString());
    }
  };

  const listSlider = [
    {
      id: "1",
      src: "https://image.bnews.vn/MediaUpload/Org/2021/02/20/pnj1.png",
    },
    {
      id: "2",
      src: "https://image.bnews.vn/MediaUpload/Org/2021/02/20/pnj1.png",
    },
    {
      id: "3",
      src: "https://image.bnews.vn/MediaUpload/Org/2021/02/20/pnj1.png",
    },
    {
      id: "4",
      src: "https://image.bnews.vn/MediaUpload/Org/2021/02/20/pnj1.png",
    },
  ];

  return (
    <div className="container">
      <title>Liên hệ</title>
      <div className="mt-[20px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          className="swiper_banner"
        >
          {listSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.src}
                alt={`slide-${item.id}`}
                className="w-full md:h-[25rem] h-[12.5rem] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="flex justify-center text-2xl font-medium pt-[1.25rem] font-roboto">
          LIÊN HỆ VỚI CHÚNG TÔI
        </p>
        <form
          onSubmit={handleSubmit}
          className="lg:flex px-[3.125rem] justify-between pt-[3.125rem] pb-[6.25rem]"
        >
          <div className="shadow-md flex flex-col gap-[15px] lg:min-w-[31.25rem] max-w-[31.25rem] items-center py-[1.25rem] lg:px-[2.5rem] sm:px-[1.25rem] px-[0.625rem]">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-primry border-2 md:py-[0.8125rem] py-[0.625rem] px-[1rem] rounded"
              placeholder="Họ và tên (*)"
              type="text"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-primry border-2 md:py-[0.8125rem] py-[0.625rem] px-[1rem] rounded"
              placeholder="Số điện thoại (*)"
              type="text"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-primry border-2 md:py-[0.8125rem] py-[0.625rem] px-[1rem] rounded"
              placeholder="Email"
              type="email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-primry border-2 md:py-[0.8125rem] py-[0.625rem] px-[1rem] rounded"
              placeholder="Yêu cầu"
              required
            />
            <button
              type="submit"
              className="w-full md:py-[0.8125rem] py-[0.625rem] px-[1rem] bg-primry text-white font-roboto font-normal text-base"
            >
              Liên hệ ngay
            </button>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d837.4903189925518!2d108.24469424552568!3d16.039739029733948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDAyJzIzLjAiTiAxMDjCsDE0JzQwLjIiRQ!5e1!3m2!1svi!2s!4v1684853146304!5m2!1svi!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:w-[650px] w-full md:h-[450px] h-full"
            />
          </div>
        </form>
      </div>
      <BackTop />
    </div>
  );
}

export default Contact;
