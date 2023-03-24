import x992 from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import x992G1 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import x992G2 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import x992G3 from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import x992L from '../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import x991 from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import x991G1 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import x991G2 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import x991G3 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import x991L from '../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import x59 from '../../assets/product-xx59-headphones/mobile/image-product.jpg'
import x59G1 from '../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg'
import x59G2 from '../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg'
import x59G3 from '../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg'
import x59L from '../../assets/shared/mobile/image-xx59-headphones.jpg'
import zx9 from '../../assets/product-zx9-speaker/mobile/image-product.jpg'
import zx9G1 from '../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
import zx9G2 from '../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
import zx9G3 from '../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
import zx9L from '../../assets/shared/mobile/image-zx9-speaker.jpg'
import zx7 from '../../assets/product-zx7-speaker/mobile/image-product.jpg'
import zx7G1 from '../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
import zx7G2 from '../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
import zx7G3 from '../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg'
import zx7L from '../../assets/shared/mobile/image-zx7-speaker.jpg'
import yx1 from '../../assets/product-yx1-earphones/mobile/image-product.jpg'
import yx1G1 from '../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import yx1G2 from '../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import yx1G3 from '../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'

interface Data {
  img: string
  newProduct?: boolean
  title: string
  desc: string
  price: string
  features: [string, string]
  box: [number, string][]
  gallery: [[string, string], [string, string], [string, string]]
  className: string
  likes: [
    [string, string, string, string],
    [string, string, string, string],
    [string, string, string, string]
  ]
}

const data: Data[] = [
  {
    img: x992,
    className: 'x992',
    newProduct: true,
    title: 'XX99 Mark II Headphones',
    desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: '$2,999',
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
    gallery: [
      [x992G1, 'x992G1'],
      [x992G2, 'x992G2'],
      [x992G3, 'x992G3'],
    ],
    likes: [
      [x991L, 'x991', 'XX99 MARK I', 'headphones/x992-mark-one'],
      [x59L, 'x59', 'XX59', 'headphones/x59-headphone'],
      [zx9L, 'zx9', 'ZX9 SPEAKER', 'speakers/zx9-speaker'],
    ],
  },
  {
    img: x991,
    className: 'x991',
    title: 'XX99 Mark I Headphones',
    desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    price: '$1,750',
    features: [
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ',
      'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    ],
    box: [
      [1, 'Headphone Unit'],
      [2, 'Replacement Earcups'],
      [1, 'User Manual'],
      [1, '3.5mm 5m Audio Cable'],
    ],
    gallery: [
      [x991G1, 'x991G1'],
      [x991G2, 'x991G2'],
      [x991G3, 'x991G3'],
    ],
    likes: [
      [x992L, 'x992', 'XX99 MARK II', 'headphones/x992-mark-two'],
      [x59L, 'x59', 'XX59', 'headphones/x59-headphone'],
      [zx9L, 'zx9', 'ZX9 SPEAKER', 'speakers/zx9-speaker'],
    ],
  },
  {
    img: x59,
    className: 'x59',
    title: 'XX59 Headphones',
    desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    price: '$899',
    features: [
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    ],
    box: [
      [1, 'Headphone Unit'],
      [2, 'Replacement Earcups'],
      [1, 'User Manual'],
      [1, '3.5mm 5m Audio Cable'],
    ],
    gallery: [
      [x59G1, 'x59G1'],
      [x59G2, 'x59G2'],
      [x59G3, 'x59G3'],
    ],
    likes: [
      [x992L, 'x992', 'XX99 MARK II', 'headphones/x992-mark-two'],
      [x991L, 'x991', 'XX99 MARK I', 'headphones/x992-mark-one'],
      [zx9L, 'zx9', 'ZX9 SPEAKER', 'speakers/zx9-speaker'],
    ],
  },
  {
    img: zx9,
    className: 'zx9',
    title: 'ZX9 SPEAKER',
    desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: '$4,500',
    features: [
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
      'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms',
    ],
    box: [
      [2, 'Speaker Unit'],
      [2, 'Speaker Cloth Panel'],
      [1, 'User Manual'],
      [1, '3.5mm 10m Audio Cable'],
      [1, '10m Optical Cable'],
    ],
    gallery: [
      [zx9G1, 'zx9G1'],
      [zx9G2, 'zx9G2'],
      [zx9G3, 'zx9G3'],
    ],
    likes: [
      [zx7L, 'zx7', 'ZX7 SPEAKER', 'speakers/zx7-speaker'],
      [x991L, 'x991', 'XX99 MARK I', 'headphones/x992-mark-one'],
      [x59L, 'x59', 'XX59', 'headphones/x59-headphone'],
    ],
  },
  {
    img: zx7,
    className: 'zx7',
    title: 'ZX7 SPEAKER',
    desc: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    price: '$3,500',
    features: [
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ',
      'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    ],
    box: [
      [2, 'Speaker Unit'],
      [2, 'Speaker Cloth Panel'],
      [1, 'User Manual'],
      [1, '3.5mm 10m Audio Cable'],
      [1, '10m Optical Cable'],
    ],
    gallery: [
      [zx7G1, 'zx7G1'],
      [zx7G2, 'zx7G2'],
      [zx7G3, 'zx7G3'],
    ],
    likes: [
      [zx9L, 'zx9', 'ZX9 SPEAKER', 'speakers/zx9-speaker'],
      [x991L, 'x991', 'XX99 MARK I', 'headphones/x992-mark-one'],
      [x59L, 'x59', 'XX59', 'headphones/x59-headphone'],
    ],
  },
  {
    img: yx1,
    className: 'yx1',
    title: 'YX1 SPEAKER',
    desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: '$599',
    features: [
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    ],
    box: [
      [2, 'Earphone Unit'],
      [2, 'Multi-size Earplugs'],
      [1, 'User Manual'],
      [1, 'USB-C Charging Cable'],
      [1, 'Travel Pouch'],
    ],
    gallery: [
      [yx1G1, 'yx1G1'],
      [yx1G2, 'yx1G2'],
      [yx1G3, 'yx1G3'],
    ],
    likes: [
      [x992L, 'x992', 'XX99 MARK II', 'headphones/x992-mark-two'],
      [x59L, 'x59', 'XX59', 'headphones/x59-headphone'],
      [zx9L, 'zx9', 'ZX9 SPEAKER', 'speakers/zx9-speaker'],
    ],
  },
]

export default data
