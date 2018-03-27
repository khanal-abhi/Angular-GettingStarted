import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(text: string, character: string): string {
        return text.replace(character, " ")
    }
}