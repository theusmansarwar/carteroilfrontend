"use client";
import { useRouter } from "next/navigation";
import "./History.css";
import { FaArrowRightLong } from "react-icons/fa6";

const historyData = [
  {
    year: "1893",
    title: "Carter Oil Company",
    image: "/1893.jpg",
    description:
      "John Joyce Carter founded the Carter Oil Company in 1893. It was the start of a strong journey in the American energy industry. The company became a part of Standard Oil and one of the biggest corporations. It played an important role in the growth of Exxon. It shows the importance it had in shaping global energy history. The company built a name of trust, progress, and reliability. The strong base of those years gave Carteroil the strength to adjust and grow as the oil and gas industry changed.",
  },
  {
    year: "1915",
    title: "Carter moved its headquarters to Tulsa",
    image: "/1915.jpg",
    description:
      "In 1915, the company moved its headquarters to Tulsa, Oklahoma. The city was rising as the center of America’s oil industry. It was the right place for new growth and opportunities. Carter became part of Tulsa’s story and helped the city gain the title of the “Oil Capital of the World.” People saw Carter as a reliable and forward-looking company that added value to the energy market. The move to Tulsa gave the company stronger roots, deeper knowledge, and a strong base for decades of expansion.",
  },
  {
    year: "1950 – 1960 ",
    title: "Humble Oil service stations branded as “Carter”",
    image: "/1950.jpg",
    description:
      "Between 1950 and 1960, Carter expanded its name through service stations run by Humble Oil in Colorado and nearby states. The stations carried the Carter brand until the early 1960s, when they became ENCO. Before the change, the Carter emblem spread across the Midwest and the Pacific Northwest. Drivers often saw it on maps and trusted it as a familiar sign of fuel and service. The company showed that it could connect with customers directly and build recognition on a national scale. It was also proof of Carter’s strong role inside the Standard Oil network.",
  },
  {
    year: "1962",
    title: "Carteroil enters international markets",
    image: "/1962.jpg",
    description:
      "In 1962, Carteroil stepped into international markets. Standard Oil of North America, later known as ExxonMobil, began operations in Venezuela. Carteroil became part of that move into one of the most important oil regions of the world. By that time, the company had already built a wide network of stations across the United States. Its emblem was known to many drivers across the country. Entering Latin America proved that Carteroil was able to expand beyond borders. It showed that the company was not only an American brand but also a rising global force in oil and lubricants.",
  },
  {
    year: "Carter",
    title: "became a recognized brand",
    image: "/1965.jpg",
    description:
      "Carter became a well-known name because of its large station network. The emblem appeared on maps, road signs, and stations across many states. It gave drivers trust and recognition, and it made Carter part of everyday travel. The wide presence also helped the company grow sales and reach more customers. The station network created regular demand for fuels and lubricants. That demand also gave the company reason to expand its products and improve logistics. Over time, the presence of Carter stations gave the brand a solid position in the market and loyalty from customers across the nation.",
  },
  {
    year: "1970 – 2018",
    title: "Carteroil expands across Latin America",
    image: "/1970.jpg",
    description:
      "From 1970 to 2018, Carteroil expanded its reach across Latin America. It entered Colombia, Costa Rica, Honduras, Guatemala, and other markets. To serve more customers, the company began producing lubricants in Houston, Texas. It was a smart move that ensured reliable quality and fair prices for both local and global buyers. Production in Houston also gave Carteroil stronger export power and a wider supply chain. Over these decades, the company built a strong reputation for trust and innovation. ",
  },
  {
    year: "2019",
    title: "Carteroil USA Inc.",
    image: "/carter-oil-logo.svg",
    description:
      "In 2019, Carteroil USA Inc. relaunched in Houston, Texas. It came back with a clear vision of the future. The company joined its long history with advanced lubricants and oilfield services. Every product met the strict standards of the American Petroleum Institute (API). It was proof of the company’s strong focus on quality and compliance. The relaunch gave Carteroil a modern position as an energy solutions provider ready for global markets. It showed how the company could blend history and innovation to move forward. Today, Carteroil supports governments, operators, and industries around the world. It provides products and services that bring trust, performance, and reliability.",
  },
];

const History = () => {
  const router = useRouter();
  return (
    <div className="history-grid">
      {historyData.map((item, index) => (
        <div
          key={item._id || index}
          className={`history-card ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* Left Side (Image) */}
          <div className="left">
            <img src={item.image} alt={item.name} />
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>
              <span>{item.year} </span>
              {item.title}
            </h2>
            <p>{item.description}</p>

            {index === 0 && (
              <button
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact Us <FaArrowRightLong />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
