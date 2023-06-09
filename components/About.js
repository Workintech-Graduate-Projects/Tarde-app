import React from "react";


function About() {
  return (
    <div className="flex mt-9 justify-between md:flex-row flex-col-reverse place-self-center  ">
      <div className="flex flex-col w-[60%] ">
        <h1 className="text-[#030E5E]  font-extrabold text-[75px]  ">
          hakkımızda
        </h1>
      
        <p className="text-[14px] text-left text-[#4A4A4A]  mt-3 ml-[66px]">
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p>
        <p className="text-[14px] text-left text-[#4A4A4A]  mt-8 ml-[66px]">
          Beşyüz yıl boyunca varlığını sürdürmekle kalmasmış, aynı zamanda pek
          değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum
          pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın
          zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü
          yayıncılık yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve
          baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
          bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere
          bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri
          standardı sahte metinler olarak kullanıldı.
        </p>
      </div>
      <div className="flex flex-col  mr-[30px] ml-32 ">
        <img className="min-w-[200px]  " src="/img/about/cry.png"></img>
        <img className="min-w-[200px] " src="/img/about/thinking.png"></img>
      </div>
    </div>
  );
}

export default About;
