import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import timezone from "dayjs/plugin/timezone"
import isBetween from "dayjs/plugin/isBetween"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import utc from "dayjs/plugin/utc"

dayjs.extend(weekday)
dayjs.extend(timezone)
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(utc)
dayjs.tz.setDefault("Asia/Seoul") // 타임존 설정

export default dayjs
