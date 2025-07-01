import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const products = [
  {
    id: 1,
    name: 'Pure Rose Attar',
    artisan: 'Mohammad Rashid',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.8,
    reviews: 127,
    attributes: {
      Volume: "6ml",
      Packaging: "Glass Bottle",
      Type: "Roll-On",
    },
    specifications: {
      Ingredients: "Rose, Sandalwood",
      Origin: "Kannauj, India",
      ShelfLife: "24 Months",
    },
    similarProducts: [],
  },
  {
    id: 2,
    name: 'Mysore Sandalwood Oil',
    artisan: 'Suresh Kumar',
    price: 3799,
    originalPrice: 4299,
    image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    rating: 4.9,
    reviews: 89,
    attributes: {
      Volume: "10ml",
      Packaging: "Aluminum Bottle",
      Type: "Oil",
    },
    specifications: {
      Ingredients: "Sandalwood",
      Origin: "Mysore, India",
      ShelfLife: "36 Months",
    },
    similarProducts: [],
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center text-red-600 text-xl">Product not found.</div>;
  }

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
          <p className="text-xl text-green-600 my-2">₹{product.price.toLocaleString()}</p>
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
        <div className="border-b py-2">
          <p><strong>Aarav</strong> - ⭐⭐⭐⭐⭐</p>
          <p>Wonderful fragrance, long-lasting!</p>
        </div>
        <div className="border-b py-2">
          <p><strong>Meera</strong> - ⭐⭐⭐⭐</p>
          <p>Packaging is so elegant.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;