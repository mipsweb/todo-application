import { Pipe, PipeTransform } from "@angular/core";
import { DateTime, Settings } from "luxon";

@Pipe({ name: "dateToString", standalone: true })
export class DateToStringPipe implements PipeTransform {
    transform(value?: Date): string {
        if (value) {
            return DateTime.fromJSDate(value).toFormat("dd-MM-yyyy HH:mm");
        }
        return "-";
    }
}