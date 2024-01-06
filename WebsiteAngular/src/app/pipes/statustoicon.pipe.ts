import { Pipe, PipeTransform } from "@angular/core";
import { TaskStatus } from "../models/enums";

@Pipe({ name: "statusToIcon", standalone: true })
export class StatusToIconPipe implements PipeTransform {
    transform(value: number): string {
        if (value) {
            if (value === TaskStatus.InProgress) {
                return "bi bi-clipboard-pulse";
            }
            else if (value === TaskStatus.Complete) {
                return "bi bi-clipboard-check";
            } else {
                return "bi bi-clipboard";
            }
        }

        return "";
    }
}