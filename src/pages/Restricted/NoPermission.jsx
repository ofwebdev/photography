import React from "react";

function NoPermission() {
  return (
    <Common
      title={"No permission"}
      subtitle={`The page you're trying access has restricted access. ${(
        <br />
      )} Please refer to your system administrator`}
      img={
        "https://img.freepik.com/premium-vector/street-barrier-with-403-error-access-forbidden_637684-56.jpg?w=2000"
      }
      btn={"Go to home"}
    />
  );
}

export default NoPermission;
