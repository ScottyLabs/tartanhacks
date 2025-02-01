import { useLocation } from "react-router-dom";

export function RegisterButton() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  let registerLink = `https://register.tartanhacks.com/`;
  if (
    params.has("utm_source") &&
    params.has("utm_medium") &&
    params.has("utm_campaign")
  ) {
    registerLink = `${registerLink}?utm_source=${params.get(
      "utm_source",
    )}&utm_medium=${params.get("utm_medium")}&utm_campaign=${params.get(
      "utm_campaign",
    )}`;
  }

  return (
    <div className="text-beige flex justify-center">
      <a href={registerLink} target="_blank" rel="noopener noreferrer">
        <div className="py-3 px-6 text-2xl font-thin bg-blue hover:bg-rippleBlue animate-[float_2s_ease-in-out_infinite] text-white rounded-md cursor-pointer">
          Register Now!
        </div>
      </a>
    </div>
  );
}
