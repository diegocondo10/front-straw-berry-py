import { NextPage } from 'next';
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import PrivateLayout from 'src/layouts/privateLayout';
// import img from '../public/img/carousel/2.png';

const Home: NextPage<any> = () => {
  const home = {
    title: 'Instituto de Parálisis Cerebral del Azuay - IPCA',
    carousel: {
      items: [
        // {
        //   img: {
        //     src: 'img/carousel/1.png',
        //     alt: '',
        //   },
        // },
        {
          img: {
            src: 'img/carousel/2.jpg',
            alt: '',
          },
        },
        {
          img: {
            src: 'img/carousel/3.jpg',
            alt: '',
          },
        },
        {
          img: {
            src: 'img/carousel/4.png',
            alt: '',
          },
        },
        {
          img: {
            src: 'img/carousel/5.jpg',
            alt: '',
          },
        },
        // {
        //   img: {
        //     src: 'img/carousel/6.jpg',
        //     alt: '',
        //   },
        // },
        // {
        //   img: {
        //     src: 'img/carousel/7.jpg',
        //     alt: '',
        //   },
        // },
        // {
        //   img: {
        //     src: 'img/carousel/8.jpg',
        //     alt: '',
        //   },
        // },
      ],
    },
    informacion: [
      {
        title: 'Misión',
        description:
          'El IPCA es un centro de atención multisectorial e integral de carácter fisco misional que cuenta con un equipo interdisciplinario en habilitación y rehabilitación medico terapéutico y educación especializada y ofrece programas de gestión acorde a las reales necesidades de los niños, niñas, adolescentes y jóvenes con discapacidad que requieren de nuestros servicios.',
      },
      {
        title: 'Visión',
        description:
          'Ser un instituto pionero que permita la superación de niños, niñas, adolescentes y jóvenes con Parálisis Cerebral Infantil y otras discapacidades para alcanzar la inclusión social.',
      },
    ],
  };

  return (
    <PrivateLayout title="Personas">
      <main className="container-fluid mb-5">
        <h1 className="text-center text-undeline " style={{ fontSize: '50px' }}>
          {home.title}
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <Carousel style={{ maxHeight: '800px' }}>
              {home.carousel.items.map((item, key) => (
                <Carousel.Item className="text-center" key={key}>
                  {/* <img
                    className="d-block w-100"
                    {...item.img}
                    style={{ maxHeight: '750px' }}
                  /> */}
                  <Image {...item.img} fluid style={{ maxHeight: '660px' }} />
                  {/* {item.caption && (
                    <Carousel.Caption>
                      {item.caption.title && <h3>{item.caption.title}</h3>}
                      {item.caption.description && <p>{item.caption.description}</p>}
                    </Carousel.Caption>
                  )} */}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="row justify-content-around mt-4">
          {home.informacion.map((item, key) => (
            <div className="col-12 col-md-6 col-lg-5 my-2" key={key}>
              <div className="card h-100 border border-primary">
                <div className="card-header bg-primary">
                  <h4 className="text-center text-white">{item.title}</h4>
                </div>
                <div className="card-body">
                  <p className="text-justify">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </PrivateLayout>
  );
};
export default Home;
