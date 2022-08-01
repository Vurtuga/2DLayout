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
    { ItemType: ItemTypes.Table, ItemHeight: 2, ItemWidth: 2, ItemIndex: "X0", ItemPosition: { x: 0, y: 0 },
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
    { ItemType: ItemTypes.Barrier, ItemIndex: "X1", ItemHeight: 2, ItemWidth: 1, ItemPosition: { x: 2, y: 0 }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X2", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 0 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X3", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 0 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X4", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 0 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X5", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 1 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X6", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 1 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X7", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 1 },
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
    { ItemType: ItemTypes.FreeSpace, ItemIndex: "X15", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 0, y: 2 }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "X8", ItemHeight: 1, ItemWidth: 5, ItemPosition: { x: 1, y: 2 }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X9", ItemHeight: 1, ItemWidth: 3, ItemPosition: { x: 0, y: 3 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X10", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 3 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X11", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 3 },
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
    { ItemType: ItemTypes.Table, ItemIndex: "X12", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 3 },
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
    { ItemType: ItemTypes.FreeSpace, ItemIndex: "X13", ItemHeight: 1, ItemWidth: 6, ItemPosition: { x: 0, y: 4 }
    },
    { ItemType: ItemTypes.FreeSpace, ItemIndex: "X14", ItemHeight: 1, ItemWidth: 6, ItemPosition: { x: 0, y: 5 }
    },
];
function GenerateLayout() {
    console.log("Begin Generation");
    layoutTemplate = [];
    layout.forEach(renderLayout);
    itemWrapper === null || itemWrapper === void 0 ? void 0 : itemWrapper.append(grid);
    for (let x = 0; x < layoutTemplate.length; x++) {
        gridAreaTemplate = gridAreaTemplate + "'" + layoutTemplate[x] + "'";
    }
    console.log("gridAreaTemplate", gridAreaTemplate);
    grid.style.gridTemplateAreas = gridAreaTemplate;
}
function renderLayout(item, index) {
    console.log("item", item);
    console.log("index", index);
    if (item.ItemType == ItemTypes.Table) {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item table");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
    else if (item.ItemType == ItemTypes.Barrier) {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item barrier");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
    else {
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class", "grid-item free-space");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
    }
}
function updateGridLayoutTemplate(Item) {
    for (let i = 0; i < Item.ItemWidth; i++) {
        for (let j = 0; j < Item.ItemHeight; j++) {
            if (layoutTemplate[Item.ItemPosition.y + j] == undefined) {
                layoutTemplate[Item.ItemPosition.y + j] = "";
            }
            layoutTemplate[Item.ItemPosition.y + j] = layoutTemplate[Item.ItemPosition.y + j].concat(Item.ItemIndex, " ");
        }
    }
    console.log("layoutTemplate", layoutTemplate);
}
