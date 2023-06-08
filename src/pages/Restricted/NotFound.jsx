import React from "react";
import Common from "./Common";

function NotFound() {
  return (
    <div>
      <Common
        title={"Sorry, Page Not Found!"}
        subtitle={
          "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
        }
        img={
          "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        }
        btn={"Go to home"}
      />
    </div>
  );
}

export default NotFound;
