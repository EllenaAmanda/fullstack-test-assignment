// data yang akan di gunakan untuk edit, tambah, ataupun hapus
const TRIPS = [
  {
    id: 0,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
    //   cobalah lengkapi sesuai dengan kebutuhan di desain
    country: "Australia",
    accomodation: "Hotel 4 Nights",
    transportation: "Qatar Airways",
    eat: "Included as Itenerary",
    duration: {
      days: 6,
      nights: 4,
    },
    date: "26 August 2020"
  },
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
  // kode delete trip disini
};

exports.addTrip = async (req,res) => {
  
}
// lanjutkan untuk add dan delete
