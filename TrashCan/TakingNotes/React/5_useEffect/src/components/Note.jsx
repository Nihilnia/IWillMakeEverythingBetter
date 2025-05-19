import { useEffect, useState } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const [userTime, setUserTime] = useState(false);

  useEffect(() => {
    //Let' s simulate an event that we are trying to reach user' s time

    console.log("useEffect worked. Timeout set.");

    const timeOut = setTimeout(() => {
      console.log("Time is up.");

      const now = new Date();
      const currentSecond = now.getSeconds();
      const currentMinute = now.getMinutes();
      const currentHour = now.getHours();
      setUserTime(`${currentHour}:${currentMinute}:${currentSecond}`);
    }, 3000);

    return () => {
      console.log(
        "After time is up. Cleared up the timer with clean- up function."
      );

      clearTimeout(timeOut);
    };
  }, []);

  /*
    Takes two paremeters;
    function that will run,
    dependency array
  */

  let content = <h2>Getting user time..</h2>;
  if (userTime != false) {
    content = <h2>Time now: {userTime}</h2>;
  }

  const code = `
    const [userTime, setUserTime] = useState(false);

  useEffect(() => {
    //Let' s simulate an event that we are trying to reach user' s time

    console.log("useEffect worked. Timeout set.");

    const timeOut = setTimeout(() => {
      console.log("Time is up.");

      const now = new Date();
      const currentSecond = now.getSeconds();
      const currentMinute = now.getMinutes();
      const currentHour = now.getHours();
      setUserTime(\`\${currentHour}:\${currentMinute}:\${currentSecond}\`);
    }, 3000);

    return () => {
      console.log(
        "After time is up. Cleared up the timer with clean- up function."
      );

      clearTimeout(timeOut);
    };
  }, []);

  /*
    Takes two paremeters;
    function that will run,
    dependency array
  */

  let content = <h2>Getting user time..</h2>;
  if (userTime != false) {
    content = <h2>Time now: {userTime}</h2>;
  }
  `;

  return (
    <section className="max-w-[80%] w-[100%]">
      <div>{content}</div>
      <div>
        <CodeExample
          code={code}
          title={
            "Reaching out the 'outside world', handle that 'side effect'! Our codes doesnt know our world!"
          }
        />
      </div>
    </section>
  );
}
