import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import CreateForm from "../components/CreateForm";
import ReportTable from "../components/ReportTable";
import Footer from "../components/Footer";

export default function Home() {
  const [location, setLocation] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [average, setAverage] = useState("");
  const [json, setJson] = useState(null); // Initialize json as null

  function all() {
    const dataToSave = {
      Location: location,
      Minimum: minimum,
      Maximum: maximum,
      Average: average,
    };
    setJson(dataToSave); // Set json data
  }

  function submitHandler(event) {
    event.preventDefault();
    all();
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-between p-20">
          <CreateForm
            handler={submitHandler}
            setLocation={setLocation}
            setMinimum={setMinimum}
            setMaximum={setMaximum}
            setAverage={setAverage}
          />
          <ReportTable json={json} />
        </main>
        <Footer />
      </div>
    </>
  );
}
