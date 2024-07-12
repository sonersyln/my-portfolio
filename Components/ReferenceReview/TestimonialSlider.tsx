import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReferenceReview from "./ReferenceReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ReferenceReview
        image="/images/feyza.jpg"
        name="Feyza Karanfil Erat"
        role="Software Developer"
        description="Liderlik becerileri ile ekibi yönlendirme ve motive etme konusunda başarılı. Proje yönetimi ve ekip koordinasyonu konularında yetkin."
      />
      <ReferenceReview
        image="/images/seyhmus.jpg"
        name="Şeyhmus Erol"
        role="Software Developer"
        description="Kendi kendine öğrenme yeteneği ve teknolojilere olan merakı ile her zaman güncel ve yenilikçi çözümler üretiyor. Yeni konuları hızla kavrayarak projeye değer katıyor."
      />
      <ReferenceReview
        image="/images/yagmur.jpg"
        name="Yağmur Çurku"
        role="Business Analyst"
        description="Harika bir takım oyuncusu. İletişimi güçlü ve her zaman yardıma hazır bir tutum sergiliyor. Fikirlerini açıkça ifade ediyor ve projeye yeni bakış açıları kazandırıyor."
      />
      <ReferenceReview
        image="/images/gurkanilisen.png"
        name="Gürkan İlişen"
        role="Senior Product Specialist"
        description="Kendisi bizim projemizde yaklaşık 6 ay eğitim almış olup, bu eğitim sırasında bir proje geliştirmesi yapmıştır. Projeyi bir ekip halinde planlayıp organize olarak gerçekleştirdiler. Ekip çalışması ve proje yönetim süreçlerini de bu süreçte geliştirmiş oldu. Java’nın yanı sıra takım çalışmasına uygun ve araştırıp öğrenme deneyimi güçlü bir karakterdir. Kendisine gözüm kapalı kefilimdir."
      />
    </Carousel>
  );
};

export default TestimonialSlider;
