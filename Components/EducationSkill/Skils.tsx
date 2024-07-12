import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "../EducationSkill/SkilsLanguage";

//Ne kadar skill ve level eklersen SkilsLanguage componentinde interface belirt

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        EĞİTİM & <span className="text-yellow-400">BECERİLER</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="Codecademy"
            year="2023 - 2024"
            description="Java & React Full Stack eğitimini tamamladım."
          />
          <SkilsItem
            title="İstanbul Kodluyor (Tobeto)"
            year="2016 - 2020"
            description="Java & React Full Stack eğitimini tamamladım."
          />
          <SkilsLanguage
            skill1="Java"
            skill2="Spring Boot"
            skill3="Git & GitHub"
            skill4="Hibernate"
            skill5="Linux"
            level1="w-[81%]"
            level2="w-[77%]"
            level3="w-[90%]"
            level4="w-[79%]"
            level5="w-[60%]"
          />
        </div>
        <div>
          <SkilsItem
            title="BAYKAR TEKNOLOJİ"
            year="2022"
            description="Kontrol Güdüm ve Seyrüsefer biriminde Servo Kontrol Takımında çalıştım."
          />
          <SkilsItem
            title="İSTANBUL GELİŞİM ÜNİVERSİTESİ"
            year="2016 - 2021"
            description="Mühendislik Fakültesi/Elektrik Elektronik Mühendisliği mezunuyum."
          />
          <SkilsLanguage
            skill1="React"
            skill2="TypeScript"
            skill3="CSS"
            skill4="CentOS"
            skill5="matlab"
            level1="w-[60%]"
            level2="w-[55%]"
            level3="w-[55%]"
            level4="w-[70%]"
            level5="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
