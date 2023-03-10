import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );

        setQuote(res.data.quote);
      } catch (error) {
        // dispatch(getProjectListError());
      }
    };
    getDetailApi();
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h4 style={{ marginBottom: "0.1rem" }}>
        “Quality <span> </span>
        <ReactTypingEffect
          text={[" Life", " Design"]}
          speed={100}
          eraseSpeed={100}
          eraseDelay={800}
          typingDelay={800}
        />
        ”
      </h4>
      <div dangerouslySetInnerHTML={{ __html: quote }} />
      {/* <p style={{ fontStyle: "italic" }}>
        “Build quality of life” for each client according to the 5D standards:
      </p>
      <h4 style={{ marginTop: "0.1rem" }}>
        Precise - Sufficient - Worth - Beautiful - Unique
      </h4> */}
    </div>
  );
};

export default Quotes;
