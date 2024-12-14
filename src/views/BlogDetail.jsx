import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import moment from "moment";

export default function BlogDetail() {
  useEffect(() => {
    document.title = "Blog Detail";
  });
  const [loading, setLoading] = useState(true);
  const [blogDetail, setBlogDetail] = useState({});
  const [notFound, setNotFound] = useState(false);
  // ambil param
  const param = useParams();
  // render ini jika param.id berubah
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.spaceflightnewsapi.net/v4/articles/${param.id}`,
    })
      .then((response) => {
        setBlogDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [param.id]);

  // function formate date
  function formatDate(date) {
    return moment(date).format("dddd, D MMMM YYYY HH:mm");
  }
  function formatDateFromNow(date) {
    return moment(date).fromNow();
  }
  return (
    <>
      <Navbar />
      <section className="pt-24 px-5 container mx-auto flex flex-wrap">
        {loading ? (
          <Loading />
        ) : notFound ? (
          <b className="font-semibolda text-xl text-slate-700">Not Found</b>
        ) : (
          <section className="w-full md:w-8/12">
            <h2 className="font-semibold text-xl md:text-2xl text-slate-800 ">
              {blogDetail.title}
            </h2>
            <h4 className="text-slate-700 mb-2 text-xs md:text-base">
              {formatDate(blogDetail.published_at)}
              <span className="border mx-2 border-slate-300"></span>
              {formatDateFromNow(blogDetail.published_at)}
            </h4>
            <div
              style={{ backgroundImage: `url(${blogDetail.image_url})` }}
              className=" w-full min-h-60 md:min-h-80 bg-cover bg-center mb-2"
            ></div>
            <h4 className="text-slate-700 mb-2 text-xs md:text-base">
              <span>Source: {blogDetail.news_site}</span>
              <span className="border mx-2 border-slate-300"></span>
              <a className="text-sky-600" href={blogDetail.url} target="_blank">
                Link news
              </a>
            </h4>
            <p>{blogDetail.summary}</p>
          </section>
        )}
      </section>
    </>
  );
}
