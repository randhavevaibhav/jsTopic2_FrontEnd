import React from "react";

const Main_topic_table = () => {
  return (
    <>
      {" "}
      <div className="topic_heading">
        <h1>Array's in Js</h1>
      </div>
      <div className="table_wrapper w_border_container">
        <table id="main_table">
          <tbody>
            <tr>
              <th>Sr. no.</th>
              <th>Topic Name</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>
                <a href="#creating_array">Creating Array</a>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                <a href="#access_array">Accessing Array Elements</a>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                <a href="#deleting_elements">Deleting Array element</a>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>
                <a href="#copy_array">Copying Array</a>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>
                <a href="#array_methods">Array Methods</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main_topic_table;
