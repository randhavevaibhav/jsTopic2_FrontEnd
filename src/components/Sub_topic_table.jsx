import React from "react";

const Sub_topic_table = () => {
  return (
    <>
      <div className="topic-container">
        <h2 id="creating_array" className="sub_heading">
          A) Creating Array
        </h2>
        <div className="table_wrapper w_border_container">
          <table id="main_table">
            <tbody>
              <tr>
                <th>Sr. no.</th>
                <th>
                  Topic Name
                  <a href="#main_table" className="w_border_container">
                    Origin
                  </a>
                </th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  <a href="#creating_array">Using Array Literal</a>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>
                  <a href="#access_array">Using the Array Constructor</a>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  <a href="#deleting_elements">Using Array.of()</a>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  <a href="#copy_array">Using Array.from()</a>
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>
                  <a href="#array_methods">
                    Using spread syntax with an iterable
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Sub_topic_table;
