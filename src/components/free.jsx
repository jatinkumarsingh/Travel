import './free.css';

const destinations = [
  {
    title: 'Mauritius',
    price: '₹62,500',
    image: '/src/assets/mauritius.jpeg',
    className: 'card mauritius'
  },
  {
    title: 'Thailand',
    price: '₹37,500',
    image: '/src/assets/thailand.jpg',
    className: 'card thailand'
  },
  {
    title: 'Malaysia',
    price: '₹48,750',
    image: '/src/assets/malaysia.jpg',
    className: 'card malaysia'
  },
  {
    title: 'Sri Lanka',
    price: '₹30,000',
    image: '/src/assets/srilanka.jpg',
    className: 'card srilanka'
  },
  {
    title: 'Seychelles',
    price: '₹25,330',
    image: '/src/assets/seychelles.jpg',
    className: 'card seychelles'
  }
];
export default function VisaFreeDestinations() {
  return (
    <section className="visa-section">
      <h2>VISA FREE DESTINATIONS</h2>

      <div className="visa-grid">
        {destinations.map((dest, index) => {
          return (
            <div
              key={index}
              className={dest.className}
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="card-content">
                <h3>{dest.title}</h3>
                <p>From {dest.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
