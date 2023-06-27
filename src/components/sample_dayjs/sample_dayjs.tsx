import dayjs from "@/commons/dayjs/dayjs"

export default function SampleDayjs() {
  const LastSunday = dayjs().weekday(-7).format("YYYY-MM-DD")
  const NextSunday = dayjs().weekday(7).format("YYYY-MM-DD")

  return (
    <div>
      <h1>Dayjs 페이지입니다</h1>
      <li>Last Sunday : {LastSunday}</li>
      <li>Next Sunday : {NextSunday}</li>
    </div>
  )
}
