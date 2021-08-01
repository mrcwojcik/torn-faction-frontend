export class Sort {

  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });


  constructor() {
  }

  public startSort(property: string, order: string) {
    if (order === "desc") {
      this.sortOrder = -1;
    }
    return (a: any, b: any) => {
        return this.collator.compare(a[property], b[property]) * this.sortOrder;
    }
  }

  private sortData(a: number, b: number) {
    if (a < b) {
      return -1 * this.sortOrder;
    } else if (a > b) {
      return 1 * this.sortOrder;
    } else {
      return 0 * this.sortOrder;
    }
  }
}
