import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router";
import Loading from "./Loading";

export default function BlogCard() {
  const [listNews, setLisNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.spaceflightnewsapi.net/v4/articles",
    })
      .then((response) => {
        setLisNews(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function formatDate(date) {
    return moment(date).fromNow();
  }

  return (
    <>
      {loading ? (
        <section className=" w-full px-5">
          <Loading />
        </section>
      ) : (
        listNews.map((item) => {
          return (
            <div key={item.id} className="md:w-6/12 w-full p-5">
              {/* CONTAINER  */}
              <Link to={`/blog/${item.id}/detail`}>
                <div className="flex justify-between w-full border rounded-lg overflow-hidden shadow-lg">
                  {/* CARD HEAD  */}
                  <div
                    style={{ backgroundImage: `url(${item.image_url})` }}
                    className="min-h-40 w-4/12 bg-cover bg-center"
                  ></div>
                  {/* END CARD HEAD  */}
                  {/* CARD BODY  */}
                  <div className="w-8/12 px-3">
                    <h3 className="overflow-hidden text-nowrap text-ellipsis font-semibold text-slate-800 text-xl">
                      {item.title}
                    </h3>
                    <h4 className="font-semibold text-slate-600">
                      {formatDate(item.published_at)}
                    </h4>
                    <span className="line-clamp-4 text-slate-600">
                      {item.summary}
                    </span>
                  </div>
                  {/* END CARD BODY  */}
                </div>
              </Link>
              {/* END CONTAINER  */}
            </div>
          );
        })
      )}
    </>
  );
}
