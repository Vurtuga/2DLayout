"use strict";
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
    ItemTypes[ItemTypes["FreeSpace"] = 0] = "FreeSpace";
    ItemTypes[ItemTypes["Table"] = 1] = "Table";
    ItemTypes[ItemTypes["Barrier"] = 2] = "Barrier";
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
            { ItemType: ItemTypes.Barrier },
            { ItemType: ItemTypes.FreeSpace }
        ],
        [
            { ItemType: ItemTypes.Table,
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
            { ItemType: ItemTypes.Barrier },
            { ItemType: ItemTypes.FreeSpace }
        ]
    ];
    layout.forEach(renderRow);
    console.log(layout);
}
function renderRow(row) {
    console.log(row);
}
