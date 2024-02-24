export default class SortableTable {

  element;
  subElements = {};

  constructor(header, {data}) {
    this.header = header;
    this.info = data;
    this.render();
  }

  get template() {
    return `
      <div data-element="productsContainer" class="products-list__container">
        <div class="sortable-table">
          <div data-element="header" class="sortable-table__header sortable-table__row">
            <div class="sortable-table__cell" data-name="images">
              <span>Image</span>
            </div>
            <div class="sortable-table__cell" data-name="title" data-sortable="">
              <span>Name</span>
              <span class="sortable-table__sort-arrow">
                <span class="sort-arrow"></span>
              </span>
            </div>
            <div class="sortable-table__cell" data-name="category">
              <span>Category</span>
            </div>
            <div class="sortable-table__cell" data-name="quantity" data-sortable="">
              <span>Quantity</span>
            </div>
            <div class="sortable-table__cell" data-name="price" data-sortable="">
              <span>Price</span>
            </div>
          </div>
          <div data-element="body" class="sortable-table__body">
          ${this.getItemData(this.info)}
          </div>
        </div>
      </div>
    `;
  }

  getItemData(info) {
    return info.map(item => {
        let itemImgString = '';
        let itemCategoryString = '';
        let itemQuantityString = '';
        if(item.images) {
          itemImgString = `
            <div class="sortable-table__cell">
              <img class="sortable-table-image" alt="Image" src="${item.images[0].url}">
            </div>
          `;
        }
        if(item.subcategory) {
          itemCategoryString = `
            <div class="sortable-table__cell">
              <span>${item.subcategory.category.title}</span>
            </div>
          `;
        }
        if(item.quantity) {
          itemQuantityString = `
            <div class="sortable-table__cell">${item.quantity}</div>
          `;
        }
      return `
        <a href="" class="sortable-table__row">
          ${itemImgString}
          <div class="sortable-table__cell">${item.title}</div>
          ${itemCategoryString}
          ${itemQuantityString}
          <div class="sortable-table__cell">${item.price}</div>
        </a>
      `;
    }).join('');
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;


    this.element = element.firstElementChild;

    this.subElements = this.getSubElements(this.element);

  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;
      return accum;
    }, {});
  }

  sort(fieldValue, orderValue) {
    if(orderValue === "asc") {
      if(fieldValue === 'price' || fieldValue === 'sales') {
        this.info = SortableTable.sortAscNum(this.info, fieldValue);
      } else {
        this.info = SortableTable.sortAsc(this.info, fieldValue);
      }
    } else if(orderValue === "desc") {
      if(fieldValue === 'price' || fieldValue === 'sales') {
        this.info = SortableTable.sortDescNum(this.info, fieldValue);
      } else {
        this.info = SortableTable.sortDesc(this.info, fieldValue);
      }
    }
    this.render();
  }

  static sortAsc(arr, fieldValue) {
    return arr.slice(0).sort((a, b) =>
      a[fieldValue].localeCompare(b[fieldValue], 'ru-RU', {caseFirst: 'upper'}));
    }

  static sortDesc(arr, fieldValue) {
    return arr.slice(0).sort((a, b) =>
      b[fieldValue].localeCompare(a[fieldValue], 'ru-RU', {caseFirst: 'upper'}));
  }


  static sortAscNum(arr, fieldValue) {
    return arr.slice(0).sort((a, b) =>
      a[fieldValue]-b[fieldValue]
    );
  }

  static sortDescNum(arr, fieldValue) {
    return arr.slice(0).sort((a, b) =>
      b[fieldValue]-a[fieldValue]
    );
  }

}