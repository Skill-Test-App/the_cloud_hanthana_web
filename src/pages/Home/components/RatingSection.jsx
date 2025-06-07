import RatingPlatform from "./RatingPlatform";

const RatingsSection = () => {
  const ratings = [
    {
      platform: "Booking.com",
      rating: "8.9",
      maxRating: "10",
      url: "https://www.booking.com/",
    },
    {
      platform: "Tripadvisor.com",
      rating: "5",
      maxRating: "5",
      url: "https://www.tripadvisor.com/",
    },
    {
      platform: "planetofhotels.com",
      rating: "9",
      maxRating: "10",
      url: "https://www.planetofhotels.com/",
    },
    {
      platform: "makemytrip.com",
      rating: "9",
      maxRating: "10",
      url: "https://www.makemytrip.com/",
    },
    {
      platform: "airbnb.com",
      rating: "4.9",
      maxRating: "5",
      url: "https://www.airbnb.com/",
    },
    {
      platform: "goibibo.com",
      rating: "4.9",
      maxRating: "5",
      url: "https://www.goibibo.com/",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
      {ratings.map((item, index) => (
        <RatingPlatform
          key={index}
          platform={item.platform}
          rating={item.rating}
          maxRating={item.maxRating}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default RatingsSection;
