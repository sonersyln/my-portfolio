import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "../EducationSkill/SkilsLanguage";

//Ne kadar skill ve level eklersen SkilsLanguage componentinde interface belirt

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="React Developer"
            year="2014 - 2018"
            description="Java ile nesne yönelimli programlama ve backend geliştirme."
          />
          <SkilsItem
            title="JAVA Developer"
            year="2016 - 2020"
            description="Java ile nesne yönelimli programlama ve backend geliştirme."
          />
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItem
            title="NextJs Developer"
            year="2021 - 2022"
            description="React ile zengin kullanıcı arayüzleri geliştirme konusunda uzmanım."
          />
          <SkilsItem
            title="NodeJs Developer"
            year="2019 - 2020"
            description="Java ile nesne yönelimli programlama ve backend geliştirme."
          />
          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[71%]"
            level2="w-[78%]"
            level3="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
