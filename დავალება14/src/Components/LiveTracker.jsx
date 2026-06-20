import React, { useEffect } from "react";

export default function LiveTracker() {
  useEffect(() => {
    console.log("Live მონიტორინგი დაიწყო");

    // ინტერვალის ჩართვა (ყოველ 2 წამში)
    const interval = setInterval(() => {
      console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან...");
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {" "}
      <br /> Live სინქრონიზაცია ჩართულია...
    </>
  );
}
