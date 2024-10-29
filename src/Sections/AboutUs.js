import React from "react";
import "./AboutUs.css";
import caro1 from "../Images/caro1.jpg";
import caro2 from "../Images/caro2.jpg";
import caro3 from "../Images/caro3.jpg";
import { Container } from "react-bootstrap";
import Reviews from "../Components/Reviews";
import cus1 from "../Images/customers/cus1.jpg"
import cus2 from "../Images/customers/cus2.jpg"
import cus3 from "../Images/customers/cus3.jpg"
import cus4 from "../Images/customers/cus4.jpg"

export default function AboutUs() {
  return (
    <div className="main-div">
      <Container>
        <div className="img-div">
          <img src={caro1} alt="" className="abt-img" />
          <img src={caro2} alt="" className="abt-img" />
          <img src={caro3} alt="" className="abt-img" />
        </div>

        <div>
          <h2 className="about-h2">Meet Florance: Where Nature Meets Art</h2>
          <p className="about-p">
            <span>W</span>elcome to Florance, Sri Lanka’s premier destination
            for exquisite floral arrangements and bouquets, each crafted to
            reflect the lush beauty and vibrant spirit of our island. At
            Florance, we believe that flowers possess an unparalleled ability to
            express emotions, enrich special moments, and bring a sense of joy
            to daily life. Our journey began with a simple passion for the art
            of floristry and a vision to share nature’s vibrant colors, unique
            textures, and intoxicating scents with our community. Over the
            years, Florance has blossomed into a trusted name, cherished for its
            commitment to quality, creativity, and attention to detail. Our
            flower shop is nestled in the heart of Sri Lanka, surrounded by the
            natural beauty that inspires every petal, stem, and leaf in our
            arrangements. We celebrate the rich diversity of Sri Lanka’s flora
            and the timeless art of floral design, blending traditional elegance
            with contemporary flair. Each bouquet and arrangement is carefully
            handcrafted by our skilled florists, who infuse creativity,
            dedication, and love into their work. We believe that every floral
            piece should be more than a mere arrangement; it should be a
            meaningful and memorable experience. Whether it’s a grand wedding,
            an intimate anniversary, a joyful birthday, or simply a gesture of
            appreciation, our flowers are designed to convey emotions and
            sentiments that go beyond words. At Florance, freshness and quality
            are our top priorities. We are proud to partner with local growers,
            ensuring our blooms are not only of the highest quality but also
            ethically sourced and sustainably harvested. By working closely with
            local farms, we are able to support Sri Lanka’s agricultural
            communities while bringing you flowers that are as fresh as they are
            beautiful. From delicate orchids to bold tropical blossoms, every
            arrangement is thoughtfully curated to reflect the unique beauty and
            essence of our island, as well as the individuality of each
            occasion. Our team at Florance is passionate about helping you make
            your moments truly unforgettable. We strive to understand the unique
            needs and preferences of each client, providing personalized
            recommendations and custom arrangements that align with your vision.
            Thank you for allowing us to be part of your cherished moments,
            infusing each one with the natural beauty and grace of Florance. We
            look forward to creating memories with you, one petal at a time, and
            to continuing to be Sri Lanka’s trusted name in floristry for years
            to come.
          </p>
        </div>

        <div>
          <h2 className="about-h2">Our Customers’ Stories</h2>

          <div className="reviews-div">
          <Reviews
            img={cus1}
            heading='"Absolutely Stunning Arrangements!"'
            review="I ordered a bouquet for my mother’s birthday, and it was stunning! The flowers were fresh, beautifully arranged, and truly captured the essence of love. Thank you, Florance, for making our special day even better!"
            name="-Emily Carter"
          />

          <Reviews
            img={cus2}
            heading='"Beautiful Experience!"'
            review="The flowers I received for my wedding were breathtaking! Each arrangement was carefully crafted and added a perfect touch to our celebration. Highly recommend Florance for anyone looking for quality and beauty in floral designs!"
            name="-Sophia Turner"
          />

          <Reviews
            img={cus3}
            heading='"Great Service!"'
            review="Florance provided exceptional service! The staff helped me choose the perfect bouquet and ensured it arrived on time. The flowers were beautiful and fresh, making the entire experience wonderful. I’ll definitely return for future orders!"
            name="-Daniel Smith"
          />

          <Reviews
            img={cus4}
            heading='"Fresh and Beautiful!"'
            review="Every order from Florance exceeds my expectations! The flowers are always fresh, and the arrangements are artistic and stunning. I love how they capture the beauty of nature. Highly recommended for any occasion!"
            name="-Olivia Johnson"
          />
          </div>

        </div>
      </Container>
    </div>
  );
}
