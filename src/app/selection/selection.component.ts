import { Component, Input } from "@angular/core";

@Component({
  selector: "app-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.css"],
})
export class SelectionComponent {
  @Input()
  title: string = "";

  @Input()
  options: string[] = [];

  @Input()
  maxChoices: number = 0;

  selectedOptions: string[] = [];

  selectOption(option: string) {
    if (this.maxChoices === 1) {
      this.selectedOptions = [option];
    } else {
      const index = this.selectedOptions.indexOf(option);

      if (this.selectedOptions.includes(option)) {
        this.selectedOptions.splice(index, 1);
      } else {
        this.selectedOptions.push(option);
      }
    }

    console.log(this.selectedOptions);
  }

  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }

  disabledOption(option: string): boolean {
    return (this.maxChoices > 1 && this.selectedOptions.length >= this.maxChoices && !this.isSelected(option));
  }
}
