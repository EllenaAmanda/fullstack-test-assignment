// data yang akan di gunakan untuk edit, tambah, ataupun hapus
const TRIPS = [
  {
    id: 0,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    description:
      "Experience a 6-day, 4-night adventure exploring the stunning landscapes of Tasmania and the vibrant city of Sydney. Enjoy comfortable stays in a 4-star hotel, seamless travel with Qatar Airways, and delicious meals as per the itinerary. Embark on an unforgettable journey through Australia’s breathtaking scenery and cultural highlights.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Australia",
    accomodation: "Hotel 4 Nights",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: {
      days: 6,
      nights: 4,
    },
    date: "26 August 2020",
    quota: 12,
    price: 148776000,
  },
  {
    id: 1,
    title: "8D/6N Wonderful Autumn Tokyo + Kyoto",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Japan",
    accomodation: "Hotel Tokyo",
    transportation: "Air Japan",
    eat: "Included as Itinerary",
    duration: {
      days: 8,
      nights: 6,
    },
    date: "26 August 2020",
    quota:10,
    price: 289990000,
  },
  {
    id: 2,
    title: "6D/4N Exciting Summer in Seoul",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://asset.kompas.com/crops/T7eZk7047hhMRM8qp7OWq9tpVkI=/119x0:1064x630/1200x800/data/photo/2019/08/15/5d54f790e9afe.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "South Korea",
    accomodation: "Hotel Seoul",
    transportation: "Arirang",
    eat: "Included as Itinerary",
    duration: {
      days: 6,
      nights: 4,
    },
    date: "26 August 2020",
    quota:14,
    price: 144032000,
  },
  {
    id: 3,
    title: "4D/3N Overland Jakarta Bandung",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://lp-cms-production.imgix.net/2024-12/shutterstockRF1331227853.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Indonesia",
    accomodation: "Hotel Indonesia",
    transportation: "Garuda Indonesia",
    eat: "Included as Itinerary",
    duration: {
      days: 4,
      nights: 3,
    },
    date: "26 August 2020",
    quota: 8,
    price: 25504000,
  },
  {
    id: 4,
    title: "4D/3N Labuan Bajo Delight",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://blog.bankmega.com/wp-content/uploads/2024/12/Labuan-Bajo-Wisata-Instagramable-yang-Harus-Masuk-List-Kamu.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Indonesia",
    accomodation: "Hotel Indonesia",
    transportation: "Garuda Indonesia",
    eat: "Included as Itinerary",
    duration: {
      days: 4,
      nights: 3,
    },
    date: "26 August 2020",
    quota: 14,
    price: 146832000,
  },
  {
    id: 5,
    title: "5D/4N Magic Tokyo Fun",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://www.cuddlynest.com/blog/wp-content/uploads/2024/03/tokyo_disneyland.png",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Indonesia",
    accomodation: "Hotel Japan",
    transportation: "Air Japan",
    eat: "Included as Itinerary",
    duration: {
      days: 5,
      nights: 4,
    },
    date: "26 August 2020",
    quota: 10,
    price: 11188000,
  }
];

exports.getTrips = async (req, res) => {
  try {
    const data = TRIPS;

    res.status(200).json({
      status: "success",
      data: data, 
    });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).send({
      status: "failed",
      message: "Internal Server error",
    });
  }
};

exports.detailTrip = async (req, res) => {
  const { id } = req.params;
    // mengecek apabila id tertangkap
    console.log(id);

    const findTrip = TRIPS.find((items) => items.id == id);
    // console.log(findTodo)

    res.json({
      message: "data by id berhasil di ambil",
      data: findTrip,
    });
};

exports.addTrip = async (req,res) => {
  
  let data = req.body;

  console.log(data)

  let newTrip = {
      id: TRIPS[TRIPS.length - 1].id + 1,
      ...data,
  }

  TRIPS.push(newTrip)

  res.status(200).json({
      message: "berhasil menambahkan trip baru",
  });
}

exports.deleteTrip = async(req,res) => {
  const { id } = req.params;
  console.log(id)

  const findIndex = TRIPS.findIndex(items => items.id == id )
  TRIPS.splice(findIndex, 1)
  console.log(TRIPS)

  res.json({
    message: "data by id berhasil dihapus",
    data: TRIPS
})
}
// lanjutkan untuk add dan delete
