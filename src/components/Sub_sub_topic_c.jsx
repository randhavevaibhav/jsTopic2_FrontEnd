import HighlightedCode from "./HighlightedCode";
import bookIcon from "../assets/icons/book.png";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { IsLoadingContex } from "../contexts/isLoadingContext";
import { localTopics } from "../utils/localStorage/topics";

const Sub_sub_topic_c = () => {
  const { loading, setLoading } = useContext(IsLoadingContex);
  const [topicData, setTopicData] = useState([]);
  const storedTopic = localTopics();

  const handleCopy = () => {};

  const fetchData = () => {
    if (storedTopic.getVal()) {
      setTopicData(storedTopic.getVal());
    } else {
      setLoading(true);
      api
        .get("/topics")
        .then((resData) => {
          setTopicData(resData);
          console.log(resData);
          storedTopic.setVal(resData);
          setLoading(false);
        })
        .catch((err) => {
          return `Error ocuured in fetchData func.\n ${err}`;
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="sub_sub_topic_container_wrapper d_flex justify_center flex_d_col align_center">
          {topicData.map((val, idx) => {
            return (
              <div className="sub_sub_topic_container w_border_container">
                <h4 className="sub_heading">
                  {`${idx + 1} ) `}
                  {val.sub_topic_2}
                </h4>
                <div className="code_block d_flex flex_d_col w_border_container">
                  <button className="copy_btn" onClick={() => handleCopy()}>
                    Copy
                  </button>
                  <p className="code_plain">{val.code_txt}</p>
                  <pre className="code-body">
                    <code className="javascript code_txt">
                      <HighlightedCode codetxt={val.code_txt} />
                    </code>
                  </pre>
                </div>

                <div className="explanation_container d_flex align_center flex_d_col">
                  <div className="heading_container d_flex flex_d_col">
                    <div className="expl_img_container w_border_container">
                      <img src={bookIcon} alt="book img" />
                    </div>
                    <h4 className="sub_heading grey_box">Explanation:</h4>
                  </div>
                  <p className="grey_box">{val.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sub_sub_topic_c;
