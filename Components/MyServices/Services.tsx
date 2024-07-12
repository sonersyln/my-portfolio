import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        Uzmanlık <span className="text-yellow-400">Alanlarım</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem] mt-[4rem] text-white">
        <div className="flex flex-col justify-between " data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Kullanıcı dostu ve etkileyici arayüzler oluşturmak için
              JavaScript, TypeScript, React ve CSS gibi modern frontend
              teknolojilerini kullanıyorum. Frontend geliştirme konusunda
              deneyim ve yetkinlik sahibiyim.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between " data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Güçlü ve ölçeklenebilir backend sistemleri oluşturmak için Java,
              Spring Boot, Maven ve Hibernate gibi teknolojilere hakimim. Veri
              tabanı yönetimi için PostgreSQL ve MySQL kullanarak, API
              entegrasyonu ve sunucu tarafı mantık geliştirme konularında
              deneyimliyim.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between " data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Server Management
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Projelerimi başarıyla hayata geçirmek için deploy ve sunucu yönetimi konularında deneyimliyim. Git ve GitHub ile versiyon kontrolü sağlayarak, projelerimin sürekli entegrasyon ve dağıtım süreçlerini yönetiyorum. Linux VDS üzerinde çalışarak, güvenli ve ölçeklenebilir sunucu çözümleri üretiyorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
