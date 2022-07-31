"use strict";
const itemWrapper = document.getElementById('grid');
const grid = document.createElement('div');
var gridAreaTemplate = "";
grid.setAttribute("class", "grid-container");
var layoutTemplate;
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
function GenerateLayout() {
    console.log("Begin Generation");
    const layout = [
        [
            { ItemType: ItemTypes.Table,
                ItemHeight: 2,
                ItemWidth: 2,
                ItemIndex: "X00",
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
            { ItemType: ItemTypes.Barrier, ItemIndex: "X01", ItemHeight: 1, ItemWidth: 1 },
            { ItemType: ItemTypes.FreeSpace, ItemIndex: "X02", ItemHeight: 1, ItemWidth: 1 }
        ],
        [
            { ItemType: ItemTypes.Skip, ItemIndex: "X10", ItemHeight: 1, ItemWidth: 2 },
            { ItemType: ItemTypes.Barrier, ItemIndex: "X11", ItemHeight: 1, ItemWidth: 1 },
            { ItemType: ItemTypes.Table, ItemIndex: "X12", ItemHeight: 1, ItemWidth: 1,
                TableObj: {
                    NoOfCustomers: 5,
                    ReservationDateTime: new Date(),
                    ReservationName: "Mohamed Khalifa",
                    TableNumber: 1,
                    TableShape: TableShapes.Circle,
                    TableState: TableStates.Available,
                    TableSize: TableSizes.Small
                }
            }
        ],
        [
            { ItemType: ItemTypes.Skip, ItemIndex: "X20", ItemHeight: 1, ItemWidth: 2 },
            { ItemType: ItemTypes.Barrier, ItemIndex: "X21", ItemHeight: 1, ItemWidth: 1 },
            { ItemType: ItemTypes.Skip, ItemIndex: "X22", ItemHeight: 1, ItemWidth: 2 },
        ]
    ];
    layout.forEach(renderRow);
    console.log(layout);
    itemWrapper === null || itemWrapper === void 0 ? void 0 : itemWrapper.append(grid);
    console.log("gridAreaTemplate", gridAreaTemplate);
    grid.style.gridTemplateAreas = gridAreaTemplate;
}
function renderRow(row, index) {
    console.log(index);
    let rowTemplate = "";
    row.forEach(function (item) {
        if (item.ItemType == ItemTypes.Table) {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item table");
            for (let i = 0; i < item.ItemWidth; i++) {
            }
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex, " ");
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
        else if (item.ItemType == ItemTypes.Barrier) {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item barrier");
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex, " ");
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
        else {
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class", "grid-item free-space");
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex, " ");
            grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
        }
    });
    gridAreaTemplate = gridAreaTemplate.concat("'", rowTemplate, "'");
}
