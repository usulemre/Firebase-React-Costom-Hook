import React, { useEffect } from "react";
import QuetesList from "../components/Quetes/QuetesList";
import Loading from "../components/UI/Loading";
import useFetch from "../hooks/use-http";
import { getAllQuotes } from "../lib/Apı";
const AllQuetes = () => {
  const {
    status,
    error,
    data: loadedQuotes,
    sendRequest,
  } = useFetch(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p className="centered">Sonuc Bulunamadı....</p>;
  }

  return <QuetesList quates={loadedQuotes} />;
};

export default AllQuetes;
