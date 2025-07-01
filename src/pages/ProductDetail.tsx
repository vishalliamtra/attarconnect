

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const product = {
  name: "Classic Rose Attar",
  images: [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
  ],
  price: "₹450",
  attributes: {
    Volume: "6ml",
    Packaging: "Glass Bottle",
    Type: "Roll-On",
  },
  specifications: {
    Ingredients: "Natural Oils, Rose Extract",
    Origin: "Kannauj, India",
    ShelfLife: "24 Months",
  },
  reviews: [
    { name: "Aarav", comment: "Wonderful fragrance, long-lasting!", rating: 5 },
    { name: "Meera", comment: "Packaging is so elegant.", rating: 4 },
  ],
  similarProducts: [
    { name: "Jasmine Bliss", image: "/images/similar1.jpg", price: "₹400" },
    { name: "Oudh Supreme", image: "/images/similar2.jpg", price: "₹600" },
    { name: "Sandalwood Spirit", image: "/images/similar3.jpg", price: "₹500" },
  ]
};

const ProductDetail = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Swiper navigation modules={[Navigation]} className="rounded-lg">
            {product.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Product ${i}`} className="w-full h-96 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-xl text-green-600 my-2">{product.price}</p>
          <div className="my-4">
            <h3 className="font-semibold mb-2">Attributes</h3>
            <ul>
              {Object.entries(product.attributes).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
          <div className="my-4">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul>
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {product.reviews.map((review, i) => (
          <div key={i} className="border-b py-2">
            <p><strong>{review.name}</strong> - {Array(review.rating).fill("⭐").join("")}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
        <div className="flex gap-4 overflow-x-auto">
          {product.similarProducts.map((sp, i) => (
            <div key={i} className="min-w-[200px] border rounded p-3">
              <img src={sp.image} alt={sp.name} className="h-40 w-full object-cover mb-2" />
              <h3 className="font-medium">{sp.name}</h3>
              <p className="text-green-600">{sp.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;