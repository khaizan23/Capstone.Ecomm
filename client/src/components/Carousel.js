import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../logo/banner1.jpg"
import banner2 from "../logo/banner2.png"
import banner3 from "../logo/banner3.png"

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>E-commerce</h3>
          <p>Various ways to make payment, such as credit cards, debit cards, PayPal, or other online payment systems.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mobile shopping</h3>
          <p>A virtual cart or basket where selected items are stored before proceeding to checkout.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Customer support</h3>
          <p>
          E-commerce: Buying and selling of goods and services over the internet
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;