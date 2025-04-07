import { useEffect, useState } from "react";

export default function GeneralMessageUI({
  message,
  time,
  onHandleUserMessage,
}) {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log("Effect worked. Time is set.");

    const timer = setTimeout(() => {
      console.log("Time is up");
      onHandleUserMessage(null);
      setIsShow(false);
    }, time);

    return () => {
      console.log("Cleared");

      clearTimeout(timer);
    };
  }, [time, onHandleUserMessage]);

  return (
    <>
      {isShow && (
        <section id="sec-general-message" className="fixed bottom-2 left-2">
          <h2>{message}</h2>
        </section>
      )}
    </>
  );
}
