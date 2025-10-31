export class DateUtils {

    static applyDateOffset(baseDate, expr) {
        if (!(baseDate instanceof Date) || isNaN(baseDate)) {
            throw new Error("applyDateOffset: baseDate must be a valid Date");
        }
        if (typeof expr !== "string") {
            throw new Error("applyDateOffset: expr must be a string");
        }
        const m = expr.trim().match(/^([+-])(\d+)([ymwd])$/i);
        if (!m) {
            throw new Error(
                `applyDateOffset: invalid format "${expr}". Expected like "+1y", "-2m", "+10d", "+2w".`
            );
        }

        const sign = m[1] === "-" ? -1 : 1;
        const amount = parseInt(m[2], 10) * sign;
        const unit = m[3].toLowerCase();

        // clone the base date (don’t mutate)
        const d = new Date(baseDate.getTime());

        switch (unit) {
            case "d":
                d.setDate(d.getDate() + amount);
                return d;

            case "w":
                d.setDate(d.getDate() + amount * 7);
                return d;

            case "m":
                return DateUtils.addMonthsClamped(d, amount);

            case "y":
                return DateUtils.addMonthsClamped(d, amount * 12);

            default:
                // Should never hit due to regex, but just in case
                throw new Error(`applyDateOffset: unsupported unit "${unit}"`);
        }
    }

    /**
     * Adds months to a date while clamping the day to the last valid day
     * of the target month (avoids JS’s overflow quirks).
     * e.g., Jan 31 + 1 month => Feb 28/29, not Mar 2.
     */
    static addMonthsClamped(date, months) {
        const y0 = date.getFullYear();
        const m0 = date.getMonth();
        const day = date.getDate();

        // compute target year/month with proper wraparound
        let y = y0 + Math.floor((m0 + months) / 12);
        let m = (m0 + months) % 12;
        if (m < 0) {
            m += 12;
            y -= 1;
        }

        // clamp day to last day of target month
        const lastDay = new Date(y, m + 1, 0).getDate();
        const clampedDay = Math.min(day, lastDay);

        // preserve time portion
        return new Date(
            y, m, clampedDay,
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        );
    }
}