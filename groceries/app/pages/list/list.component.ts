import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

import * as SocialShare from "nativescript-social-share";
/* NativeScript plugins: npm modules that can access native code and use Android and iOS SDKs, if required */

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery> = [];
  grocery = "";
  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  isLoading = false;
  listLoaded = false;

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
    this.isLoading = true;
    this.groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  public add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this.groceryListService.add(this.grocery)
      .subscribe(
      groceryObject => {
        this.groceryList.unshift(groceryObject);
        this.grocery = "";
      },
      () => {
        alert({
          message: "An error occurred while adding an item to your list.",
          okButtonText: "OK"
        });
        this.grocery = "";
      }
      )
  }

  public delete(id, index) {

    this.groceryListService.delete(id).subscribe(() => {
      this.groceryList.splice(index, 1);
      this.grocery = "";
    },
      () => {
        alert({
          message: "An error occurred while deleting an item to your list.",
          okButtonText: "OK"
        });
        this.grocery = "";
      }
    )
  }

  public share() {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(", ")
      .trim();
    SocialShare.shareText(listString);
  }
}