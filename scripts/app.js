"use strict";
const itemWrapper = document.getElementById('grid');
const grid = document.createElement('div');
var gridAreaTemplate = "";
grid.setAttribute("class", "grid-container");
var layoutTemplate;
var currentRow;
var TableStates;
(function (TableStates) {
    TableStates[TableStates["Available"] = 0] = "Available";
    TableStates[TableStates["Booked"] = 1] = "Booked";
    TableStates[TableStates["Occupied"] = 2] = "Occupied";
    TableStates[TableStates["CourseDelayed"] = 3] = "CourseDelayed";
    TableStates[TableStates["ItemsReadyInKitchen"] = 4] = "ItemsReadyInKitchen";
    TableStates[TableStates["KDSBumpedPrinted"] = 5] = "KDSBumpedPrinted";
    TableStates[TableStates["Paid"] = 6] = "Paid";
    TableStates[TableStates["Cleaning"] = 7] = "Cleaning";
})(TableStates || (TableStates = {}));
var ItemTypes;
(function (ItemTypes) {
    ItemTypes[ItemTypes["Skip"] = 0] = "Skip";
    ItemTypes[ItemTypes["FreeSpace"] = 1] = "FreeSpace";
    ItemTypes[ItemTypes["Table"] = 2] = "Table";
    ItemTypes[ItemTypes["Barrier"] = 3] = "Barrier";
})(ItemTypes || (ItemTypes = {}));
var TableSizes;
(function (TableSizes) {
    TableSizes[TableSizes["Small"] = 0] = "Small";
    TableSizes[TableSizes["Medium"] = 1] = "Medium";
    TableSizes[TableSizes["Large"] = 2] = "Large";
})(TableSizes || (TableSizes = {}));
var TableShapes;
(function (TableShapes) {
    TableShapes[TableShapes["Square"] = 0] = "Square";
    TableShapes[TableShapes["Rectangle"] = 1] = "Rectangle";
    TableShapes[TableShapes["Circle"] = 2] = "Circle";
    TableShapes[TableShapes["Oval"] = 3] = "Oval";
    TableShapes[TableShapes["Triangle"] = 4] = "Triangle";
    TableShapes[TableShapes["Octagon"] = 5] = "Octagon";
    TableShapes[TableShapes["Diamond"] = 6] = "Diamond";
})(TableShapes || (TableShapes = {}));
const layout = [
    { ItemType: ItemTypes.Table, ItemHeight: 2, ItemWidth: 2, ItemIndex: "X00", ItemPosition: { x: 0, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "X01", ItemHeight: 2, ItemWidth: 1, ItemPosition: { x: 2, y: 0 }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X02", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X03", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X04", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X13", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X14", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X15", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "X20", ItemHeight: 1, ItemWidth: 6, ItemPosition: { x: 0, y: 2 }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X30", ItemHeight: 1, ItemWidth: 3, ItemPosition: { x: 0, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X33", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X34", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X35", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 1,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
];
function GenerateLayout() {
    console.log("Begin Generation");
    layoutTemplate = [];
    layout.forEach(renderLayout);
    itemWrapper === null || itemWrapper === void 0 ? void 0 : itemWrapper.append(grid);
    console.log("gridAreaTemplate", gridAreaTemplate);
    grid.style.gridTemplateAreas = gridAreaTemplate;
}
function renderLayout(item, index) {
    console.log("item", item);
    console.log("index", index);
    if (item.ItemType == ItemTypes.Table) {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item table");
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
    else if (item.ItemType == ItemTypes.Barrier) {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item barrier");
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
    else {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item free-space");
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
}
function renderRow(row, index) {
    console.log(index);
    row.forEach(function (item) {
        if (item.ItemType == ItemTypes.Table) {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item table");
            updateGridLayoutTemplate(item);
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
        else if (item.ItemType == ItemTypes.Barrier) {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item barrier");
            updateGridLayoutTemplate(item);
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
        else {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item free-space");
            updateGridLayoutTemplate(item);
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
    });
}
function updateGridLayoutTemplate(Item) {
    for (let i = 0; i < Item.ItemWidth; i++) {
        if (layoutTemplate[Item.ItemPosition.x] == undefined) {
            layoutTemplate[Item.ItemPosition.x] = "";
        }
        layoutTemplate[Item.ItemPosition.x] = layoutTemplate[Item.ItemPosition.x].concat(Item.ItemIndex, " ");
    }
    for (let i = 0; i < Item.ItemHeight; i++) {
        if (layoutTemplate[Item.ItemPosition.y + i] == undefined) {
            layoutTemplate[Item.ItemPosition.y + i] = "";
        }
        layoutTemplate[(Item.ItemPosition.y + 1) + i] = layoutTemplate[Item.ItemPosition.y + i].concat(Item.ItemIndex, " ");
    }
    console.log("layoutTemplate", layoutTemplate);
}
