import x992 from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import x992G1 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import x992G2 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import x992G3 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'

interface Data {
  img: string
  newProduct?: boolean
  title: string
  desc: string
  price: number
  features: [string, string]
  box: [number, string][]
  gallery: [string, string, string]
}

const data: Data[] = [
  {
    img: x992,
    newProduct: true,
    title: 'XX99 Mark II Headphones',
    desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2999,
    features: [
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
      'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    ],
    box: [
      [1, 'Headphone Unit'],
      [2, 'Replacement Earcups'],
      [1, 'User Manual'],
      [1, '3.5mm 5m Audio Cable'],
      [1, 'Travel Bag'],
    ],
    gallery: [x992G1, x992G2, x992G3],
  },
]

export default data
