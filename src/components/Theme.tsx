import Amplify from "../svg/Amplify"

export default function Theme() {
  const themeInfoString1 = `Make your ideas louder and heard across scales. It's about transforming whispers into roars, taking those sparks of creativity and turning them into blazing beacons of change. Whether it's a subtle improvement on an existing technology or a groundbreaking new concept, we encourage you to think audaciously and expansively.`
  const themeInfoString2 = `Think bigger and bolder, and let your small ideas amplify exponentially!`
  return (
    <section className="w-2/3 text-center text-white m-auto border-b-4 text-lg md:text-xl" id="theme">
      <h1 className="mt-16 text-xl md:text-6xl font-bold mb-96">This year&apos;s theme is...</h1>
      <Amplify className="m-auto w-[60vw]" />
      <p className="max-w-2xl m-auto mb-6">{themeInfoString1}</p>
      <p className="max-w-2xl m-auto mb-12">{themeInfoString2}</p>
    </section>
  )
}