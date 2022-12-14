/* eslint-disable no-console */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './RandomAnnounces.scss';
import { Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import Announce from './Announce/Announce';

function RandomAnnounces() {
  const data = useSelector((state) => state.randomannounce.randomannounce);

  const datainfos = data.map((dataresults) => (

    <SwiperSlide>
      <Announce
        key={dataresults.workspace_id}
        image={dataresults.image_link}
        announceName={dataresults.title}
        cityName={dataresults.city}
        price={`${dataresults.day_price} €/Jour`}
        workspaceId={dataresults.workspace_id}
      />
    </SwiperSlide>
  ));
  console.log(data);
  return (
    <div className="containerCard">
      <div className="cardTitle">
        <p>Voici un aperçu de nos Workspaces disponibles à la location</p>
      </div>
      <div className="cardCarousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            800: {
              width: 800,
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          }}
        >
          {datainfos}

        </Swiper>
      </div>
    </div>
  );
}
export default RandomAnnounces;
